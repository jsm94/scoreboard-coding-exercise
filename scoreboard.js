import { setupScoreBoard } from './config/setupData'
import ScoreBoard from './modules/scoreboard/ScoreBoard'

export function setupFootballWorldCupScoreBoard(element) {
    const scoreBoard = new ScoreBoard()
    setupScoreBoard(scoreBoard)
    console.log(scoreBoard.getSummaryByTotalScore())
    const summary = scoreBoard.getSummaryByTotalScore()
    element.innerHTML = summary
}
