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
