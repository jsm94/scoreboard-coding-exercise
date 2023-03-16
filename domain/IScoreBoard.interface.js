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
}

export default IScoreBoard
