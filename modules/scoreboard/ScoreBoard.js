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
        this.games.push({ homeTeam, awayTeam, homeScore: 0, awayScore: 0 })
    }

    /**
     * @param {string} homeTeam
     * @param {string} awayTeam
     */
    finishGame = (homeTeam, awayTeam) => {
        this.games = this.games.filter(
            (game) =>
                homeTeam.concat(awayTeam) !==
                game.homeTeam.concat(game.awayTeam)
        )
    }

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
