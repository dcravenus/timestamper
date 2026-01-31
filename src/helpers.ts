import { DateTime } from "luxon";

type getStringFromDateTimeProps = {
  dateTime?: DateTime | string;
  utc?: boolean;
  iso?: boolean;
  timezone?: boolean;
};

export const getStringFromDateTime = ({
  dateTime,
  utc,
  iso,
  timezone,
}: getStringFromDateTimeProps = {}) => {
  let dt: DateTime = DateTime.now();
  if (dateTime && typeof dateTime === "string") {
    dt = DateTime.fromISO(dateTime);
  } else if (dateTime && typeof dateTime !== "string") {
    dt = dateTime;
  }
  if (!dt.isValid) return "Invalid DateTime";

  if (timezone) return dt.zoneName;

  if (utc) {
    dt = dt.toUTC();
  }

  if (iso) {
    return dt.set({ second: 0, millisecond: 0 }).toISO({
      suppressSeconds: true,
    });
  }
  return dt.toFormat("M/d/yyyy h:mm a");
};
