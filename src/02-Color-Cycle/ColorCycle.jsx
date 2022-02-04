import React, {useState, useEffect} from 'react';
import './ColorCycle.css';

const ColorCycle = () => {
  const [color, setColor] = useState(["#","00","FF","00"]);
  const [start,setStart] = useState(false);
  const [increment, SetIncrement] = useState("FF");
  const [seconds, setSeconds] = useState(0.25);
  useEffect(()=>{
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {       
       const arr = [...color];
         let hexColor = (parseInt(color.toString().replace(/,/g, "").substring(1), 16) + parseInt(increment.padStart(6,"0"),16)).toString(16).padStart(6,  "0").toUpperCase();
         arr[1]=hexColor.substring(0,2);
         arr[3] = hexColor.substring(4, 6);
         arr[2] = hexColor.substring(2, 4);
       setColor([...arr]);
      }, seconds*1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  },[start,color,seconds,increment]);
  const handleChange = (i,e) =>{
    const arr = [...color];
    arr[i]=e.target.value;
    setColor([...arr]);
  }

  return (
    <div>
      <div
        className="color-container"
        style={{ backgroundColor: color.toString().replace(/,/g, "") }}
      >
        <input
          className={
            color[1].match(/[0-9A-Fa-f]{2}/g) !== null
              ? "color-input"
              : "color-input border-error"
          }
          disabled={start}
          value={color[1]}
          onChange={(e) => handleChange(1, e)}
          placeholder="Red Hex Value"
        />
        <input
          className={
            color[2].match(/[0-9A-Fa-f]{2}/g) !== null
              ? "color-input"
              : "color-input border-error"
          }
          disabled={start}
          value={color[2]}
          onChange={(e) => handleChange(2, e)}
          placeholder="Green Hex Value"
        />
        <input
          className={
            color[3].match(/[0-9A-Fa-f]{2}/g) !== null
              ? "color-input"
              : "color-input border-error"
          }
          disabled={start}
          value={color[3]}
          onChange={(e) => handleChange(3, e)}
          placeholder="Blue Hex Value"
        />
        <input
          className={
            increment.match(/^[0-9A-Fa-f]+$/) !== null
              ? "color-input"
              : "color-input border-error"
          }
          disabled={start}
          value={increment}
          onChange={(e) => SetIncrement(e.target.value.toUpperCase())}
          placeholder="Increment Hex Value"
        />
        <input
          className="color-input"
          disabled={start}
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          placeholder="seconds"
        />
        <button className='color-button'
          disabled={
            color[1].match(/[0-9A-Fa-f]{2}/g) === null ||
            color[2].match(/[0-9A-Fa-f]{2}/g) === null ||
            color[3].match(/[0-9A-Fa-f]{2}/g) === null ||
            increment.match(/^[0-9A-Fa-f]+$/) === null
          }
          onClick={() => setStart(!start)}
        >
          {start ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
}

export default ColorCycle;
