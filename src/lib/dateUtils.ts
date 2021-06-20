import moment, { Moment } from 'moment';

const getMomentFromFilename = (filename: string) => {
  try {
    const [date, fileEnding] = filename.split('_');

    const time = fileEnding
      .slice(0, -4)
      .replace(/[hms]/g, ':')
      .slice(0, -1);

    return moment(`${date} ${time}`, moment.ISO_8601);
  } catch (e) {
    console.error(e);

    return null;
  }
}

const formatMoment = (momentInstance: Moment, formatter: string) => {
  const formatted = momentInstance.format(formatter);

  return formatted === 'Invalid date' ? null : formatted;
};

const formatFilenameWithMoment = (filename: string, formatter: string) => {
  const momentTime = getMomentFromFilename(filename);

  if (!momentTime) return null;

  return formatMoment(momentTime, formatter);
}

const DATE_FORMATTER = "dddd, MMMM Do YYYY";
const TIME_FORMATTER = "h:mm:ss a"

export const getFormattedDateTimeFromFilename = (filename: string) => 
  formatFilenameWithMoment(filename, `${DATE_FORMATTER}, ${TIME_FORMATTER}`);

export const getFormattedTimeFromFilename = (filename: string) => 
  formatFilenameWithMoment(filename, TIME_FORMATTER);

export const getFormattedDate = (date: string) => {
  const momentTime = moment(date, 'YYYY-MM-DD');

  return formatMoment(momentTime, DATE_FORMATTER);
};
