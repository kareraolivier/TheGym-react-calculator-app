export const number: { num: string }[] = [
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
  const operator = number
    .filter((_, index) => index > 10)
    .map((element) => element.num);
  return operator;
};

export const stringValidation = (
  oldSting: string = "",
  operatorString: string = ""
): string => {
  // eslint-disable-next-line unicorn/prefer-set-has
  const operators: string[] = [...operator()].slice(0, -2);

  let addedString: string = "";
  console.log("karera", oldSting, "new", operatorString);
  if (
    operators.includes(operatorString) &&
    // eslint-disable-next-line unicorn/prefer-at
    operators.includes(oldSting?.charAt(oldSting.length - 1))
  ) {
    console.log("first");
    addedString = oldSting + operatorString;
    console.log(
      [...addedString]
        .filter((_, index) => index != addedString.length - 2)
        .join("")
    );
    return [...addedString]
      .filter((_, index) => index != addedString.length - 2)
      .join("");
  } else {
    return (addedString = oldSting + operatorString);
  }
};
