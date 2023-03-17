import { beforeEach, describe, expect, it, test } from 'vitest'
import { setupScoreBoard } from '../../config/setupData'
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
            scoreBoard.startGame('Mexico', 'Canada')
            expect(() => scoreBoard.startGame('Mexico', 'Canada')).toThrow()
        })
    })

    describe('Finish a game', () => {
        it('when exists, remove from the scoreboard', () => {
            scoreBoard.startGame('Mexico', 'Canada')
            scoreBoard.finishGame('Mexico', 'Canada')
            expect(scoreBoard.getGames().length).toBe(0)
        })

        it('when not exists, there is nothing to remove', () => {
            scoreBoard.startGame('Mexico', 'Canada')
            scoreBoard.finishGame('Germany', 'France')
            expect(scoreBoard.getGames().length).toBe(1)
        })
    })

    describe('Update score', () => {
        it('when exists, update the game score', () => {
            scoreBoard.startGame('Mexico', 'Canada')
            scoreBoard.updateScore('Mexico', 'Canada', 0, 5)
            const mockedGameScore = {
                homeTeam: 'Mexico',
                awayTeam: 'Canada',
                homeScore: 0,
                awayScore: 5,
            }
            expect(scoreBoard.getGames()[0]).toEqual(mockedGameScore)
        })

        it('when not exists, there is nothing to change', () => {
            scoreBoard.startGame('Mexico', 'Canada')
            scoreBoard.updateScore('Germany', 'France', 0, 5)
            const mockedGameScore = {
                homeTeam: 'Mexico',
                awayTeam: 'Canada',
                homeScore: 0,
                awayScore: 0,
            }
            expect(scoreBoard.getGames()[0]).toEqual(mockedGameScore)
        })

        it('when scores are negative numbers, throws an error', () => {
            setupScoreBoard(scoreBoard)
            const mockedSummary =
                '1. Uruguay 6 - Italy 6\n2. Spain 10 - Brazil 2\n3. Mexico 0 - Canada 5\n4. Argentina 3 - Australia 1\n5. Germany 2 - France 2'
            const summary = scoreBoard.getSummaryByTotalScore()
            expect(summary).toBe(mockedSummary)
        })
    })
})
