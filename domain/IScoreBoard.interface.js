/**
 * @interface
 */
class IScoreBoard {
    /**
     * @type {Object[]}
     */
    games

    /**
     * Get all games from scoreboard
     */
    getGames() {}

    /**
     * Start a game, including it into score board
     * @function
     * @param {string} homeTeam
     * @param {string} awayTeam
     */
    startGame(homeTeam, awayTeam) {}

    /**
     * Finish a game, removing from the score board
     * @param {string} homeTeam
     * @param {string} awayTeam
     */
    finishGame(homeTeam, awayTeam) {}
}

export default IScoreBoard
