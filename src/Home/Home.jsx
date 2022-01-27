import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import PomodoroClock from '../01-Pomodoro-Clock/PomodoroClock';
import ColorCycle from '../02-Color-Cycle/ColorCycle';
import JsonCsv from '../03-JSON2CSV/JsonCsv';
import QRCodeBadge from '../04-QRCode-Badge/QRCodeBadge';
import MarkdownPreview from '../05-Markdown-previewer/MarkdownPreview';
import TypingPractice from '../06-Typing-Practice/TypingPractice';
import CalculatorCLI from '../07-Calculator-CLI/CalculatorCLI';
import GithubTimeline from '../08-Github-Timeline/GithubTimeline';
import BooleBot from '../09-Boole-Bot-Game/BooleBot';
import SpellIt from '../10-SpellIt/SpellIt';


const HomePage = () =>{
    return <div>HomePage</div>
}

const Home = () => {
  return (<div>
      <Router >
      <ul>
          <li>
              <Link to='/PomodoroClock'>PomodoroClock</Link>
          </li>
          <li>
              <Link to='/ColorCycle'>ColorCycle</Link>
          </li>
          <li>
              <Link to='/JsonCsv'>JsonCsv </Link>
          </li>
          <li>
              <Link to='/QRCodeBadge'>QRCodeBadge</Link>
          </li>
          <li>
              <Link to='/markdownpreview'>MarkdownPreview</Link>
          </li>
          <li>
              <Link to='/TypingPractice'>TypingPractice</Link>
          </li>
          <li>
              <Link to='/CalculatorCLI'>CalculatorCLI</Link>
          </li>
          <li>
              <Link to='/GithubTimeline'>GithubTimeline</Link>
          </li>
          <li>
              <Link to='/BooleBot'>BooleBot</Link>
          </li>
          <li>
              <Link to='/SpellIt'>SpellIt</Link>
          </li>
      
      </ul>
      <Routes>
          <Route exact path="/" element={<HomePage />} ></Route>
          <Route exact path='/PomodoroClock' element={< PomodoroClock />}></Route>
          <Route exact path='/ColorCycle' element={< ColorCycle />}></Route>
          <Route exact path='/JsonCsv' element={< JsonCsv />}></Route>
          <Route exact path='/QRCodeBadge' element={< QRCodeBadge />}></Route>
          <Route exact path='/markdownpreview' element={< MarkdownPreview/>}></Route>
          <Route exact path='/TypingPractice' element={< TypingPractice />}></Route>
          <Route exact path='/CalculatorCLI' element={< CalculatorCLI />}></Route>
          <Route exact path='/GithubTimeline' element={< GithubTimeline/>}></Route>
          <Route exact path='/BooleBot' element={< BooleBot />}></Route>
          <Route exact path='/SpellIt' element={<SpellIt/>}></Route>

      </Routes>
      </Router>
      </div>);
}
export default Home;
