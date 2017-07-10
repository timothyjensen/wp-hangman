(
  function (w) {

    // List of variables that will hold data and state.

    var availableChars = [],
      remainingGuesses = 6, // Total number of allowed guesses. Typically 6.
      answer,
      currentGuesses = [], // Characters that have been guessed by the player.
      stickmanCoordinates // Array of HTML canvas coordinates to draw.

    /***************
     *  Game Setup
     ***************/

    /**
     * Answer will be defined by an editor using a shortcode attribute. The
     * answer could be passed to JS via localized script, but then the answer
     * would be available in the DOM (cheaters). So it's probably better to
     * grab the answer with AJAX.
     * @returns {string}
     */
    function getAnswer () {
      // Get the answer via AJAX.
      return answer
    }

    /**
     * Returns an array of the available characters.
     * @returns {Array}
     */
    function setAvailableChars () {
      // Loop through A-Z, 0-9 to build an array of available characters.
      return availableChars
    }

    /**
     * Render the HTML to show empty placeholders for each of the characters
     * that comprise the answer. Really this could be done with PHP, but hey,
     * why not do it with JS. We will interact with these placeholders quite
     * a bit, so let's give each one an id as well as a class.
     */
    function renderEmptyPlaceholders () {}

    /**
     * Here we build our hanging device. How macabre.
     * We'll use HTML5 canvas since we need to make our stickman grow
     * with each incorrect guess. When the game begins there needs to be
     * a gallows in place.
     */
    function renderGallows () {}

    /***********************
     *  Player interaction
     ***********************/

    /**
     * Checks if the current guess matches a character in the answer and takes
     * the appropriate next step for the game.
     * @param {string|number} currentGuess Current guess submitted by the
     *   player.
     */
    function validateCurrentGuess (currentGuess) {

      // I want to player to be able to type in their guesses as well as select
      // from the choices that are printed on the screen.  Need some help
      // figuring out how to handle that.

      // If the player has typed an invalid character, for example the ESC
      // button, then alert the player of their invalid guess.

      // if current guess matches a character in the answer
      // printCorrectGuess();

      // Else increment misses. If we've hit the limit of guesses then end the
      // game.  Otherwise, draw the appropriate stickman body part and block out
      // the incorrect character from the available choices.
    }

    /**
     * Fills in the placeholders with correct guesses.
     */
    function printCorrectGuess () {}

    /**
     * Disables characters from begin selected.
     * @param {string|number} character Character to be disabled.
     */
    function disableCharacter (character) {}

    /**
     * Alert the player that they submitted an invalid guess.
     */
    function invalidCharAlert () {}

    /**
     * Each incorrect guess will result in the hangman growing a little more.
     * Since each miss corresponds with a unique canvas stroke I'm thinking a
     * switch statement might work well. On second thought, the coordinates
     * could exist in as an array of objects.
     * @param {number} misses Total number of misses.
     */
    function drawStickman (misses) {
      // if ( 0 ==== misses ) drawStickmanHead(stickmanCoordinates[misses]);
      // else drawStickmanBody(stickmanCoordinates[misses]);
    }

    /**
     * Draws the stickman's head.
     * @param {object} canvasElementArgs Canvas coordinates and radius for the
     *                 circle that will represent the stickman's head.
     */
    function drawStickmanHead (canvasElementArgs) {
      // Draw the HTML canvas circle to represent the head.
    }

    /**
     * Draws the stickman's body parts.
     * @param {object} canvasElementArgs Canvas coordinates for the
     *   lines/strokes that will represent the stickman's body parts.
     */
    function drawStickmanBody (canvasElementArgs) {
      // Draw the HTML canvas coordinates.
    }

    /*****************
     * Game Teardown
     *****************/

    /**
     * Checks if the game should be over.
     * @returns {boolean}
     */
    function isGameOver () {
      return 0 < remainingGuesses
    }

    /**
     * Ends the game.
     */
    function doGameEnd () {}

    /**
     * Resets the game so player can start over.
     */
    function resetGame () {
      // Confirm they want to restart unless they are already out of guesses.
    }

  }
)(window)
