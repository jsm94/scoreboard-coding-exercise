import { describe, expect, it } from 'vitest'
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
}

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

describe('Score Board should', () => {
    it('create an empty score board', () => {
        const scoreBoard = new ScoreBoard()
        expect(scoreBoard.getGames().length).toBe(0)
    })
})
