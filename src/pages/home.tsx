import { useState } from "react";
import Keyscard from "../components/keys";
import { numbers, stringValidation } from "../components/utils";

const Home = () => {
  const [keys, setKeys] = useState("");
  const [result, setResult] = useState();
  const [errors, setErrors] = useState(false);
  const getNumber = (numkey: string) => {
    if (numkey == "A/C") {
      return setKeys("");
    }

    if (numkey == "=") {
      setResult(eval(keys));
      setKeys(stringValidation("", result));
    } else if (numkey == "+/-") {
      setKeys((previous) => {
        const number: number = Number(previous);
        return (number * -1).toString();
      });
    } else {
      setKeys((previous) => stringValidation(previous, numkey));
    }
  };
  errors &&
    setTimeout(() => {
      setErrors(false);
      setKeys("");
    }, 1000);

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-[50rem] flex flex-col items-center">
          <h1 className="text-5xl text-green-600 text-center py-5 font-bold">
            Calculator
          </h1>
          <p className="font-bold text-2xl my-4 py-4 px-6 bg-gray-300 sm:w-1/2 w-4/5 rounded-lg text-right">
            {keys === "" ? "0" : keys}
            {errors && <span className="text-red-500">Error</span>}
          </p>
          <Keyscard keys={numbers} getNumber={getNumber} />
        </div>
      </div>
    </div>
  );
};

export default Home;
