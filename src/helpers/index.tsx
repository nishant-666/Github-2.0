import moment from "moment";

export function formatNumberToShort(value: number): string {
  if (value >= 1000) {
    const suffixes = ["", "k", "M", "B", "T"];
    const suffixIndex = Math.floor(Math.log10(value) / 3);
    const shortValue = (value / Math.pow(10, suffixIndex * 3)).toFixed(1);
    return shortValue + suffixes[suffixIndex];
  }
  return value.toString();
}

export function timeAgo(timestamp: string): string {
  const currentDate = new Date();
  const inputDate = new Date(timestamp);

  const timeDifference = currentDate.getTime() - inputDate.getTime();
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

  if (hoursAgo === 1) {
    return "1 hr ago";
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hrs ago`;
  } else {
    return moment(inputDate).format("ll");
  }
}
