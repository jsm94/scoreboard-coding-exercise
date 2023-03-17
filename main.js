// @ts-nocheck
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupFootballWorldCupScoreBoard } from './scoreboard.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello!</h1>
    <h2>This is the Football World Cup Score Board</h2>
    <h3>summary by total score implementation</h3>
    <div id="scoreboard" class="card">
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupFootballWorldCupScoreBoard(document.querySelector('#scoreboard'))
