export function utcToDayMonthYear(time) {
    const utcTime = new Date(time)
  const day = String(utcTime.getUTCDate()).padStart(2, "0");
  const month = String(utcTime.getUTCMonth() + 1).padStart(2, "0");
  const year = String(utcTime.getUTCFullYear()).slice(2);
  return `${day}/${month}/${year}`;
}
