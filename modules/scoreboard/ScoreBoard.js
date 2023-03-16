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
        this.games.push({ homeTeam, awayTeam, homeScore: 0, awayScore: 0 })
    }
}

export default ScoreBoard
