import React,{useState} from 'react';
import './JsonCsv.css';

const JsonCsv = () => {
  const [json, setJson] = useState([
    {
      amount: "12185",
      job: "GAPA",
      month: "JANUARY",
      year: "2010",
    },
    {
      amount: "147421",
      job: "GAPA",
      month: "MAY",
      year: "2010",
    },
    {
      amount: "2347",
      job: "GAPA",
      month: "AUGUST",
      year: "2010",
    },
  ]);
const [csv,setCsv] = useState("");
const convertJson = () => {
  let arr=[];
  const json_arr = Object.keys(json[0]);
  arr.push(json_arr.join().concat("\r\n"));
for(let j in json){
  const json_arr = Object.values(json[j]);
  arr.push(json_arr.join().concat('\r\n'));
}
setCsv(arr.join(""));
setJson(json);
}

  return (
    <div>
      <textarea
        className="json-textarea"
        value={JSON.stringify(json, null, "\t")}
        disabled
      />

      <textarea className="json-textarea" disabled value={csv} />
      <button onClick={convertJson}>Convert to Csv</button>
    </div>
  );
}

export default JsonCsv;
