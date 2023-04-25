export const secondsToDhms = (totalSeconds: number) => {
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const secondsDisplay = seconds > 9 ? seconds : `0${seconds}`;
  const minutesDisplay = minutes > 9 ? minutes : `0${minutes}`;
  const hoursDisplay = hours > 9 ? hours : `0${hours}`;

  const getS = () => {
    return `00:${secondsDisplay}`;
  };

  const getMs = () => {
    return `${minutesDisplay}:${secondsDisplay}`;
  };

  const getHms = () => {
    return `${hoursDisplay}:${getMs()}`;
  };

  if (days) {
    return days === 1 ? `${days} day ${getHms()}` : `${days} days ${getHms()}`;
  }

  if (hours) {
    return getHms();
  }

  if (minutes) {
    return getMs();
  }

  return getS();
};
