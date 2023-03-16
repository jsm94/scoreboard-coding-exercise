import IScoreBoard from '../../domain/IScoreBoard.interface'

/**
 * Class that implements a scoreboard
 * @implements {IScoreBoard}
 */
class ScoreBoard extends IScoreBoard {
    constructor() {
        super()
        this.games = []
    }

    getGames = () => this.games
}

export default ScoreBoard
