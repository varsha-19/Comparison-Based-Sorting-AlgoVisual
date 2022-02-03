export function convertInputToArrayString(string) {
  string = string.replaceAll(/\s/g, "");
  string = string.replaceAll(/\d{3}/g, "");
  string = string.replaceAll(/\s\s/g, " ");
  string = string.replaceAll(/\s,/g, ",");
  string = string.replaceAll(/,,/g, ",");
  string = string.replaceAll(/[^0-9,\s]/g, "");
  return string;
}

export function convertArrayStringToArray(string) {
  return string
    .split(",")
    .filter((v) => v !== "")
    .map((v) => +v);
}

export function getRandomArray(length = generateRandomNumberInRange(5, 30)) {
  return Array.from(new Array(length), () => generateRandomNumberInRange());
}

export function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function generateRandomNumberInRange(lowerLimit = 1, upperLimit = 99) {
  return lowerLimit + Math.floor(Math.random() * upperLimit);
}