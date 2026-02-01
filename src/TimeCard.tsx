import { getStringFromDateTime } from "./helpers";
import { DateTime } from "luxon";
import "./TimeCard.css";

const TimeCard = ({
  dateTime,
  handleClose,
}: {
  dateTime?: DateTime | string;
  handleClose: any;
}) => {
  return (
    <div className="container">
      <strong>
        Local Time ({getStringFromDateTime({ dateTime, timezone: true })})
      </strong>{" "}
      <button
        onClick={() => {
          handleClose(dateTime);
        }}
      >
        X
      </button>
      <p>{getStringFromDateTime({ dateTime })}</p>
      <p>{getStringFromDateTime({ dateTime, iso: true })}</p>
      <p></p>
      <strong>UTC Time</strong>
      <p>{getStringFromDateTime({ dateTime, utc: true })}</p>
      <p>{getStringFromDateTime({ dateTime, utc: true, iso: true })}</p>
    </div>
  );
};

export default TimeCard;
