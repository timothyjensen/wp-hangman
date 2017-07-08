(function (w) {

    // List of variables that will hold data and state.

    var guesses, // Characters that have been guessed by the player.
      misses, // Incorrect guesses.
      availableChars, // A-Z, 0-9
      guessLimit, // Total number of allowed guesses. Typically 6.
      answer,
      currentGuess

    /**
     * Answer will be defined by an editor using a shortcode attribute. The
     * answer could be passed to JS via localized script, but then the answer
     * would be available in the DOM (cheaters). So it's probably safest to
     * grab the answer with AJAX.
     */
    function getAnswer () {

      // return answer;
    }

    /**
     * Render the HTML to show empty placeholders for each of the characters
     * that comprise the answer. Really this could be done with PHP, but hey,
     * why not do it with JS. We will interact with these placeholders quite
     * a bit, so let's give each one an id as well as a class.
     */
    function renderEmptyPlaceholders () {

    }

    /**
     * Here we build our hanging device. How macabre.
     * We'll use HTML5 canvas since we need to make our stickman grow
     * with each incorrect guess. When the game begins there needs to be
     * a gallows in place.
     */
    function renderGallows () {

    }

    /**
     * Each incorrect guess will result in the hangman growing a little more.
     * Since each miss corresponds with a unique canvas stroke I'm thinking a
     * switch statement might work well.
     * @param {number} misses Total number of misses.
     */
    function drawStickman (misses) {

    }

    /**
     * Checks if the current guess matches a character in the answer.
     * @param {string|number} currentGuess Current guess submitted by the player.
     */
    function validateCurrentGuess ( currentGuess ) {
        // if current guess matches a character in the answer
        // printCorrectGuess();

        // else increment misses
        // drawStickman( misses );
    }
    
    function printCorrectGuess () {

    }

    /**
     * Checks if the game should be over.
     * @param {number} misses Total number of misses.
     * @returns {boolean}
     */
    function isGameOver( misses ) {
        return misses >= guessLimit;
    }

  }
)(window)
