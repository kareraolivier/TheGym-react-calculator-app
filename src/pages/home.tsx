import { useState } from "react";
import Keys from "../components/keys";
import { number } from "../components/utils";
const Home = () => {
  const [keys, setKeys] = useState("");

  const getNumber = (numkey: string) => {
    if (numkey == "A/C") {
      return setKeys("");
    }

    if (numkey == "=") {
      setKeys((previous) => {
        if (eval(previous) == 0) {
          return "";
        }
        if (eval(previous) == undefined) {
          return "";
        }
        return eval(previous);
      });
    } else if (numkey == "+/-") {
      setKeys((previous) => {
        const number: number = Number(previous);
        return (number * -1).toString();
      });
    } else if (["+", "-", "*", "-"].includes(numkey)) {
      setKeys((previous) =>
        // eslint-disable-next-line unicorn/prefer-at
        previous.charAt(previous.length - 1) == numkey
          ? previous
          : previous + numkey.toString()
      );
    } else {
      setKeys((previous) => previous + numkey.toString());
    }
  };
  console.log(keys);

  return (
    <div>
      <div className="h-screen flex flex-col flex-wrap justify-center items-center">
        <p className="font-bold text-2xl my-4 py-4 px-6 PY-4 bg-gray-300 w-1/2 rounded-lg text-right">
          {keys == "" ? "0" : keys}
        </p>
        <Keys keys={number} getNumber={getNumber} />
      </div>
    </div>
  );
};

export default Home;
