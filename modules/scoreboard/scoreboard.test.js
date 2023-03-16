import { describe, expect, it } from 'vitest'
import ScoreBoard from './ScoreBoard'

describe('Score Board should', () => {
    it('create an empty score board', () => {
        const scoreBoard = new ScoreBoard()
        expect(scoreBoard.getGames().length).toBe(0)
    })
})
