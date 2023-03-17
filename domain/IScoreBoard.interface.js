/**
 * @interface
 */
class IScoreBoard {
    /**
     * @type {import("./Game.model").Game[]}
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

    /**
     * Update a game score
     * @param {string} homeTeam
     * @param {string} awayTeam
     * @param {number} homeScore
     * @param {number} awayScore
     */
    updateScore(homeTeam, awayTeam, homeScore, awayScore) {}

    /**
     * Returns a summary order by total score, those games with the same total score
     * will be returned ordered by the most recently added
     */
    getSummaryByTotalScore() {}
}

export default IScoreBoard
