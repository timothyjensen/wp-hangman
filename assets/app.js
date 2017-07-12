(
  function (w) {

    // List of variables that will hold data and state.

    var availableChars = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      ],
      maxGuesses = 10,
      answer = getAnswer(),
      answerChars = answer.toUpperCase().split(''),
      guessedChars = [],
      misses = 0,
      availableCharsSelector = document.getElementById(
        'hangman-available-characters-list'),
      answerPlaceholdersSelector = document.getElementById(
        'hangman-answer-placeholders'),
      characterPlaceholderElements = [],
      canvasSelector = document.getElementById('hangman-canvas'),
      canvasContext = canvasSelector.getContext('2d'),
      stickmanCoordinates = [
        { // Base.
          'lineStartX': 20,
          'lineStartY': 380,
          'lineEndX': 280,
          'lineEndY': 380,
        },
        { // Post.
          'lineStartX': 40,
          'lineStartY': 20,
          'lineEndX': 40,
          'lineEndY': 380,
        },
        { // Boom.
          'lineStartX': 40,
          'lineStartY': 20,
          'lineEndX': 150,
          'lineEndY': 20,
        },
        { // Rope.
          'lineStartX': 150,
          'lineStartY': 20,
          'lineEndX': 150,
          'lineEndY': 60,
        },
        { // Head.
          'arcCenterX': 150,
          'arcCenterY': 80,
          'radius': 20,
        },
        { // Torso.
          'lineStartX': 150,
          'lineStartY': 100,
          'lineEndX': 150,
          'lineEndY': 250,
        },
        { // Left leg.
          'lineStartX': 150,
          'lineStartY': 250,
          'lineEndX': 75,
          'lineEndY': 350,
        },
        { // Right leg.
          'lineStartX': 150,
          'lineStartY': 250,
          'lineEndX': 225,
          'lineEndY': 350,
        },
        { // Left arm.
          'lineStartX': 150,
          'lineStartY': 150,
          'lineEndX': 80,
          'lineEndY': 125,
        },
        { // Right arm.
          'lineStartX': 150,
          'lineStartY': 150,
          'lineEndX': 220,
          'lineEndY': 125,
        },
      ]

    /***************
     *  Game Setup
     ***************/

    /**
     * Returns the base64 decoded answer, or an empty string on failure.
     * @returns {string}
     */
    function getAnswer () {
      if (typeof hangman_app_script_data.answer === 'undefined') {
        return ''
      }
      else {
        try {
          return window.atob(hangman_app_script_data.answer)
        }
        catch (e) {
          console.log('ERROR: Hangman answer not formatted correctly!')
          return ''
        }
      }
    }

    /**
     * Renders the available characters.
     */
    function renderAvailableChars () {
      var html = ''
      for (var $i = 0; $i < availableChars.length; $i++) {
        html += '<li class="hangman-available-character" data-key-code="' +
                availableChars[$i].charCodeAt(0) + '" data-char="' +
                availableChars[$i] + '">' + availableChars[$i] +
                '</li>'
      }

      availableCharsSelector.innerHTML += html
    }

    /**
     * Retrieves the current guess and passes it to the validateCurrentGuess()
     * function.
     */
    function addGuessListener () {

      document.onkeydown = function (event) {
        validateCurrentGuess(event.key.toUpperCase())
      }

      availableCharsSelector.addEventListener('click', function (event) {
        if (event.target.matches('li')) {
          validateCurrentGuess(event.target.textContent)
        }
      })

    }

    /**
     * Render the HTML to show empty placeholders for each of the characters
     * that comprise the answer. Really this could be done with PHP, but hey,
     * why not do it with JS. We will interact with these placeholders quite
     * a bit, so let's give each one an id as well as a class.
     */
    function renderEmptyPlaceholders () {

      if (!answer) {
        answerPlaceholdersSelector.innerHTML += '<strong>Oops! Something went wrong with retrieving the answer&hellip;</strong>'
        return
      }

      var html = '<ul id="hangman-placeholders"><li class="word-placeholder"><ul>'

      for (var $i = 0; $i < answerChars.length; $i++) {
        if (' ' === answerChars[$i]) {
          html += '<li class="character-placeholder space"></ul></li><li class="word-placeholder"><ul>'
        }
        else if (!isValidChar(answerChars[$i])) {
          html += '<li class="character-placeholder given">' +
                  answerChars[$i] + '</li>'
        }
        else {
          html += '<li class="character-placeholder"></li>'
        }
      }

      html += '</ul></li></ul>'

      answerPlaceholdersSelector.innerHTML += html
    }

    /**
     * Retrieves the character placeholder elements.
     */
    function getCharacterPlaceholderElements () {
      characterPlaceholderElements = answerPlaceholdersSelector.querySelectorAll(
        '.character-placeholder')
    }

    /***********************
     *  Player interaction
     ***********************/

    /**
     * Checks if a character exists in the available characters.
     * @param {string} char Character to check.
     * @returns {boolean}
     */
    function isValidChar (char) {
      return availableChars.includes(char.toUpperCase())
    }

    /**
     * Checks if the current guess matches a character in the answer and takes
     * the appropriate next step for the game.
     * @param {string|number} currentGuess Current guess submitted by the
     *   player.
     */
    function validateCurrentGuess (currentGuess) {

      if (!isValidChar(currentGuess) || guessedChars.includes(currentGuess)) {
        console.log('Invalid guess')
        return
      }

      guessedChars.push(currentGuess)

      // Is the current guess correct?
      if (answerChars.includes(currentGuess)) {
        printCorrectGuess(currentGuess)
      }
      else {
        misses++
        drawHangman(misses - 1)
        if (isGameOver()) {
          doGameEnd()
        }
      }

      // Disable the guessed character.
      disableCharacter(currentGuess)
    }

    /**
     * Fills in the placeholders with correct guesses.
     * @param {string} guess Player's guess.
     */
    function printCorrectGuess (guess) {
      for (var $i = 0; $i < answerChars.length; $i++) {
        if (answerChars[$i] === guess) {
          characterPlaceholderElements[$i].innerHTML = guess
        }
      }
    }

    /**
     * Disables characters from begin selected.
     * @param {string|number} character Character to be disabled.
     */
    function disableCharacter (character) {
      var charSelector = availableCharsSelector.querySelector(
        '[data-char="' + character + '"]')
      if (!charSelector.classList.contains('disabled')) {
        charSelector.className += ' disabled'
      }
    }

    /**
     * Draws the hangman figure.
     * @param {number} misses Stickman coordinates index
     */
    function drawHangman (misses) {
      canvasContext.beginPath()

      var path = stickmanCoordinates[misses]

      // Check if we should draw a circle or line.
      if (path.hasOwnProperty('radius')) {
        canvasContext.arc(path.arcCenterX, path.arcCenterY, path.radius, 0,
          2 * Math.PI)
      }
      else {
        canvasContext.moveTo(
          path.lineStartX,
          path.lineStartY
        )
        canvasContext.lineTo(
          path.lineEndX,
          path.lineEndY
        )
      }
      canvasContext.stroke()
    }

    /*****************
     * Game Teardown
     *****************/

    /**
     * Checks if the game should be over.
     * @returns {boolean}
     */
    function isGameOver () {
      console.log(maxGuesses, misses, maxGuesses <= misses)
      return maxGuesses <= misses
    }

    /**
     * Ends the game.
     */
    function doGameEnd () {
      alert('That\'s it buddy. You lose!')
    }

    /**
     * Resets the game so player can start over.
     */
    function resetGame () {
      // Confirm they want to restart unless they are already out of guesses.
    }

    function init () {
      renderAvailableChars()
      renderEmptyPlaceholders()
      addGuessListener()
      getCharacterPlaceholderElements()

      canvasSelector.width = 300
      canvasSelector.height = 400
//
//      for (var i = 0; i < stickmanCoordinates.length; i++) {
//        drawHangman(i)
//      }
    }

    init()

  }
)(window)
