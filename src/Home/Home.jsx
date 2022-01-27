import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
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
import Nav from './Nav';

const HomePage = () =>{
    return <div>HomePage</div>
}

const Home = () => {
  return (
      <Router >
          <Nav />
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
          <Route path="*" element={<HomePage />} ></Route>

      </Routes>
      </Router>
      );
}
export default Home;
