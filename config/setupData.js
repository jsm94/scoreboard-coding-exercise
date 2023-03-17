import IScoreBoard from '../domain/IScoreBoard.interface'

const mockedScoreBoard = [
    {
        homeTeam: 'Mexico',
        awayTeam: 'Canada',
        homeScore: 0,
        awayScore: 5,
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'Brazil',
        homeScore: 10,
        awayScore: 2,
    },
    {
        homeTeam: 'Germany',
        awayTeam: 'France',
        homeScore: 2,
        awayScore: 2,
    },
    {
        homeTeam: 'Uruguay',
        awayTeam: 'Italy',
        homeScore: 6,
        awayScore: 6,
    },
    {
        homeTeam: 'Argentina',
        awayTeam: 'Australia',
        homeScore: 3,
        awayScore: 1,
    },
]

/**
 *
 * @param {IScoreBoard} scoreBoard
 */
const setupScoreBoard = (scoreBoard) => {
    mockedScoreBoard.forEach((game) => {
        scoreBoard.startGame(game.homeTeam, game.awayTeam)
        scoreBoard.updateScore(
            game.homeTeam,
            game.awayTeam,
            game.homeScore,
            game.awayScore
        )
    })
}

export { setupScoreBoard }
