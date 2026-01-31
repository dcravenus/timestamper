import { useState } from "react";
import { DateTime } from "luxon";

import TimeCard from "./TimeCard";

function App() {
  const [dateTimes, setDateTimes] = useState([""]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <h1>Timestamper</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (inputValue && !DateTime.fromISO(inputValue).isValid) {
            // TODO: Notify user date is invalid
            return;
          }
          setDateTimes((prev) => {
            return [...prev, inputValue];
          });
          setInputValue("");
        }}
      >
        Add
      </button>
      {dateTimes.map((dateTime) => (
        <TimeCard dateTime={dateTime}></TimeCard>
      ))}
    </>
  );
}

export default App;
