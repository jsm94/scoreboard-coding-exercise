import { beforeEach, describe, expect, it } from 'vitest'
import ScoreBoard from './ScoreBoard'

/**
 * @type {ScoreBoard}
 */
let scoreBoard

describe('Score Board should', () => {
    beforeEach(() => {
        scoreBoard = new ScoreBoard()
    })

    it('create an empty score board', () => {
        expect(scoreBoard.getGames().length).toBe(0)
    })

    describe('Start a game', () => {
        it('when not exist add a game to score board', () => {
            const mockedGame = {
                homeTeam: 'Mexico',
                awayTeam: 'Canada',
                homeScore: 0,
                awayScore: 0,
            }
            scoreBoard.startGame('Mexico', 'Canada')
            expect(scoreBoard.getGames()[0]).toEqual(mockedGame)
        })

        it('when exists, throw an error', () => {
            const mockedGame = {
                homeTeam: 'Mexico',
                awayTeam: 'Canada',
                homeScore: 0,
                awayScore: 0,
            }
            scoreBoard.startGame('Mexico', 'Canada')
            expect(() => scoreBoard.startGame('Mexico', 'Canada')).toThrow()
        })
    })
})
