import React, {useState, useEffect} from 'react';
import './ColorCycle.css';

const ColorCycle = () => {
  const [color, setColor] = useState(["#","0F","00","00"]);
  const [start,setStart] = useState(false);
  useEffect(()=>{
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
       const arr = [...color];
       arr[1] = genRanHex(2);
       arr[2] = genRanHex(2);
       arr[3] = genRanHex(2);
       setColor([...arr]);
      }, 250);
    }
    return () => {
      clearInterval(intervalId);
    };
  },[start,color]);
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
          className="color-input"
          value={color[1]}
          onChange={(e) => handleChange(1, e)}
        />
        <input
          className="color-input"
          value={color[2]}
          onChange={(e) => handleChange(2, e)}
        />
        <input
          className="color-input"
          value={color[3]}
          onChange={(e) => handleChange(3, e)}
        />
        <button onClick={()=>setStart(!start)}>Start</button>
      </div>
      
      </div>

  );
}

export default ColorCycle;
