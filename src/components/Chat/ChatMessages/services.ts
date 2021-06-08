// @ts-nocheck
// others
import { DAYS_MEANINGS } from './constants';

const oneDay = 24 * 60 * 60 * 1000;

const shouldBeWithZero = (value: number): string =>
  value < 10 ? `0${value}` : value;

const getFormatedDate = (date: Date): string =>
  `${date.getFullYear()}-${shouldBeWithZero(
    date.getMonth() + 1
  )}-${shouldBeWithZero(date.getDate())}`;

const getFormatedTime = (date: Date): string =>
  `${shouldBeWithZero(date.getHours())}:${shouldBeWithZero(date.getMinutes())}`;

export const getDate = (time: number): string => {
  const dateFromMessage = new Date(getFormatedDate(new Date(time)));
  const currentDate = new Date(getFormatedDate(new Date()));
  const diffrentDays = Math.round(
    Math.abs((currentDate - dateFromMessage) / oneDay)
  );

  if (diffrentDays === 0) {
    return getFormatedTime(new Date());
  }

  return diffrentDays < DAYS_MEANINGS.length
    ? DAYS_MEANINGS[diffrentDays]
    : getFormatedDate(new Date(time));
};
