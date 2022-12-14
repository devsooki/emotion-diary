export const getPrevMonth = date => {
  const now = date.getMonth();
  const newDate = new Date(date);

  // TODO: 블로그 정리(date의 set)
  newDate.setMonth(now - 1);

  return newDate;
}

export const getNextMonth = date => {
  const now = date.getMonth();
  const newDate =  new Date(date);

  newDate.setMonth(now + 1);

  return newDate;
}

export const getFirstDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month, 1);
}

export const getLastDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month+1, 0);
}

export const createDateKey = (date, cell) => {
  return (
    String(date.getFullYear()) +
    String(date.getMonth() + 1) +
    String(cell < 10 ? `0${cell}` : cell)
  );
};