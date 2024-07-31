export const numbers: { num: string }[] = [
  { num: "1" },
  { num: "2" },
  { num: "3" },
  { num: "4" },
  { num: "5" },
  { num: "6" },
  { num: "7" },
  { num: "8" },
  { num: "9" },
  { num: "0" },
  { num: "A/C" },
  { num: "(" },
  { num: "." },
  { num: "+/-" },
  { num: "+" },
  { num: "-" },
  { num: "*" },
  { num: "/" },
  { num: "%" },
  { num: ")" },
  { num: "=" },
];

export const operator = (): string[] => {
  const operator = numbers
    .filter((_, index) => index > 10)
    .map((element) => element.num);
  return operator;
};

export const stringValidation = (
  oldSting: string = "",
  operatorString: string = ""
): string => {
  const operators: string[] = [...operator()].slice(0, -2);

  let addedString: string = "";
  if (
    operators.includes(operatorString) &&
    operators.includes(oldSting?.charAt(oldSting.length - 1))
  ) {
    addedString = oldSting + operatorString;

    return [...addedString]
      .filter((_, index) => index != addedString.length - 2)
      .join("");
  } else {
    return (addedString = oldSting + operatorString);
  }
};
