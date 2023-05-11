import './style.css'
import javascriptLogo from './public/javascript.svg'
import viteLogo from './public/vite.svg'
import { setupCounter } from './components/counter.js'

document.querySelector('#app').innerHTML = `
  <div>

    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Github!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
