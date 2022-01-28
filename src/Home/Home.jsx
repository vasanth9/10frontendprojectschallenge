import React, { useState } from "react";
import HomePage from "./HomePage";
import PomodoroClock from "../01-Pomodoro-Clock/PomodoroClock";
import ColorCycle from "../02-Color-Cycle/ColorCycle";
import JsonCsv from "../03-JSON2CSV/JsonCsv";
import QRCodeBadge from "../04-QRCode-Badge/QRCodeBadge";
import MarkdownPreview from "../05-Markdown-previewer/MarkdownPreview";
import TypingPractice from "../06-Typing-Practice/TypingPractice";
import CalculatorCLI from "../07-Calculator-CLI/CalculatorCLI";
import GithubTimeline from "../08-Github-Timeline/GithubTimeline";
import BooleBot from "../09-Boole-Bot-Game/BooleBot";
import SpellIt from "../10-SpellIt/SpellIt";
import Nav from "./Nav";

const Home = () => {
  const [project, setProject] = useState(0);
  const projects = [
    <HomePage />,
    <PomodoroClock />,
    <ColorCycle />,
    <JsonCsv />,
    <QRCodeBadge />,
    <MarkdownPreview />,
    <TypingPractice />,
    <CalculatorCLI />,
    <GithubTimeline />,
    <BooleBot />,
    <SpellIt />
  ];
  return (
    <div>
      <Nav project={project} setProject={setProject} />
      {projects[project]}
    </div>
  );
};
export default Home;
