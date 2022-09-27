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

  // TODO: 블로그 정리(다음달의 0일은 없으니까, 그 전달의 마지막 날짜가 됨)
  return new Date(year, month+1, 0);
}