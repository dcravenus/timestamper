import { getStringFromDateTime } from "./helpers";
import { DateTime } from "luxon";

const TimeCard = ({ dateTime }: { dateTime?: DateTime | string }) => {
  return (
    <div>
      <p>Local Time ({getStringFromDateTime({ dateTime, timezone: true })})</p>
      <p>{getStringFromDateTime({ dateTime })}</p>
      <p>{getStringFromDateTime({ dateTime, iso: true })}</p>
      <p>UTC Time</p>
      <p>{getStringFromDateTime({ dateTime, utc: true })}</p>
      <p>{getStringFromDateTime({ dateTime, utc: true, iso: true })}</p>
    </div>
  );
};

export default TimeCard;
