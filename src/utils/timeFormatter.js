export function utcToDayMonthYear(timestamp) {
    const utcTime = new Date(timestamp)
  const day = String(utcTime.getUTCDate()).padStart(2, "0");
  const month = String(utcTime.getUTCMonth() + 1).padStart(2, "0");
  const year = String(utcTime.getUTCFullYear()).slice(2);
  return `${day}/${month}/${year}`;
}

export function utcToTimeAgo(timestamp) {
  const currentTime = new Date();
  const pastTime = new Date(timestamp);
  const timeDifference = currentTime - pastTime;

  const secondsInMillisecond = 1000;
  const minutesInMillisecond = secondsInMillisecond * 60;
  const hoursInMillisecond = minutesInMillisecond * 60;
  const daysInMillisecond = hoursInMillisecond * 24;
  const yearsInMillisecond = daysInMillisecond * 365;

  if (timeDifference < secondsInMillisecond) {
    return 'Just now';
  } else if (timeDifference < minutesInMillisecond) {
    const seconds = Math.floor(timeDifference / secondsInMillisecond);
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  } else if (timeDifference < hoursInMillisecond) {
    const minutes = Math.floor(timeDifference / minutesInMillisecond);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (timeDifference < daysInMillisecond) {
    const hours = Math.floor(timeDifference / hoursInMillisecond);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (timeDifference < yearsInMillisecond) {
    const days = Math.floor(timeDifference / daysInMillisecond);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(timeDifference / yearsInMillisecond);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
}