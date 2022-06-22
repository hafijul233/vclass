export const enumToArray = (inputEnum, isNumberArray = false) => {
  let valueArray = [];
  if (isNumberArray === true) {
    valueArray = Object.keys(inputEnum)
      .filter((v) => isNaN(Number(v)))
      .map((name) => inputEnum[name as keyof typeof inputEnum]);
  } else {
    valueArray = Object.keys(inputEnum).map(
      (name) => inputEnum[name as keyof typeof inputEnum],
    );
  }
  return valueArray;
};
