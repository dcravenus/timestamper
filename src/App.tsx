import { useState } from "react";
import { DateTime } from "luxon";

import TimeCard from "./TimeCard";

import "./App.css";

function App() {
  const [dateTimes, setDateTimes] = useState<Set<string>>(new Set([""]));
  const [inputValue, setInputValue] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const handleClose = (dateTime: string) => {
    setDateTimes((prev) => {
      const next = new Set(prev);
      next.delete(dateTime);
      return next;
    });
  };

  return (
    <div className="app-container">
      <h1>Timestamper</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onInput={() => {
            setInvalidInput(false);
          }}
          className={invalidInput ? "invalid" : ""}
        ></input>
        <button
          onClick={() => {
            if (inputValue && !DateTime.fromISO(inputValue).isValid) {
              setInvalidInput(true);
              return;
            }
            setDateTimes((prev) => {
              const next = new Set(prev);
              next.add(inputValue);
              return next;
            });
            setInputValue("");
          }}
        >
          Add
        </button>
      </div>

      <div className="time-card-container">
        {Array.from(dateTimes)
          .map((dateTime) => {
            return (
              <TimeCard
                dateTime={dateTime}
                key={dateTime}
                handleClose={handleClose}
              ></TimeCard>
            );
          })
          .reverse()}
      </div>
    </div>
  );
}

export default App;
