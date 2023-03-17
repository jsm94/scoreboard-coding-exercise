import IScoreBoard from '../../domain/IScoreBoard.interface'

/**
 * Class that implements a scoreboard
 * @class
 * @implements {IScoreBoard}
 */
class ScoreBoard extends IScoreBoard {
    constructor() {
        super()
        this.games = []
    }

    getGames = () => this.games

    /**
     * @param {string} homeTeam
     * @param {string} awayTeam
     */
    startGame = (homeTeam, awayTeam) => {
        if (this._teamsAreInScoreboard(homeTeam, awayTeam))
            throw new Error(
                'Scoreboard: A game already have some of those teams'
            )
        this.games.push({
            homeTeam,
            awayTeam,
            homeScore: 0,
            awayScore: 0,
        })
    }

    /**
     * @param {string} homeTeam
     * @param {string} awayTeam
     */
    finishGame = (homeTeam, awayTeam) => {
        this.games = this.games.filter(
            (game) => !this._matchGame({ homeTeam, awayTeam }, game)
        )
    }

    /**
     * @param {string} homeTeam
     * @param {string} awayTeam
     * @param {number} homeScore
     * @param {number} awayScore
     */
    updateScore = (homeTeam, awayTeam, homeScore, awayScore) => {
        if (homeScore < 0 || awayScore < 0)
            throw new Error('Scoreboard: score should be positive number')
        this.games = this.games.map((game) =>
            this._matchGame({ homeTeam, awayTeam }, game)
                ? { ...game, homeScore, awayScore }
                : game
        )
    }

    getSummaryByTotalScore = () => {
        const sortedByTotalScore = [...this.games].sort(this._sortByTotalScore)
        return this._getSummary(sortedByTotalScore)
    }

    /**
     * Comparator by total score
     * @param {Object} a
     * @param {Object} b
     * @returns {number}
     */
    _sortByTotalScore = (a, b) => {
        const aTotalScore = a.homeScore + a.awayScore
        const bTotalScore = b.homeScore + b.awayScore
        return (
            bTotalScore - aTotalScore ||
            this.games.indexOf(b) - this.games.indexOf(a)
        )
    }

    /**
     * Returns a summary as a string list of the score board
     * @param {Object[]} games
     * @returns {string}
     */
    _getSummary = (games) =>
        games
            .map((game, index) => {
                const ln = index ? '\n' : ''
                return `${ln}${index + 1}. ${game.homeTeam} ${
                    game.homeScore
                } - ${game.awayTeam} ${game.awayScore}`
            })
            .join('')

    /**
     * Check if two games are equals
     * @param {Object} leftGame
     * @param {Object} rightGame
     */
    _matchGame = (leftGame, rightGame) =>
        leftGame.homeTeam.concat(leftGame.awayTeam) ===
        rightGame.homeTeam.concat(rightGame.awayTeam)

    /**
     * Check if some of a pair of teams from a game are in the scoreboard
     * @param {string} homeTeam
     * @param {string} awayTeam
     * @returns {boolean}
     */
    _teamsAreInScoreboard = (homeTeam, awayTeam) =>
        this.games.some(
            (game) =>
                [homeTeam, awayTeam].includes(game.homeTeam) ||
                [homeTeam, awayTeam].includes(game.awayTeam)
        )
}

export default ScoreBoard
