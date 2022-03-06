import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import customParseFormat from "dayjs/plugin/customParseFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

export const DEFAULT_DATE_FORMAT = "MM/DD/YYYY";
export const DEFAULT_LOCALE = "pt-br";
export const DEFAULT_TIMEZONE = "America/Sao_Paulo";

dayjs.extend(customParseFormat);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault(DEFAULT_TIMEZONE);

export const formatDate = (date: string, format = DEFAULT_DATE_FORMAT) => {
  return dayjs(date).format(format);
};
