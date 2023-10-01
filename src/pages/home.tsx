import { useState } from "react";
import Keys from "../components/keys";
import { number, stringValidation } from "../components/utils";

const Home = () => {
  const [keys, setKeys] = useState("");
  const [errors, setErrors] = useState(false);
  const getNumber = (numkey: string) => {
    if (numkey == "A/C") {
      return setKeys("");
    }

    if (numkey == "=") {
      setKeys((previous: string) => {
        try {
          if (eval(previous) == 0) {
            return "";
          }
          if (eval(previous) == undefined) {
            return "";
          }

          return eval(previous);
        } catch (error) {
          setErrors(true);
          console.error(error);
        }
      });
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
      <div className="h-screen flex flex-col md:flex-wrap justify-center items-center">
        <h1 className="text-5xl text-green-600 text-center py-5 font-bold">
          Calculator
        </h1>
        <p className="font-bold text-2xl my-4 py-4 px-6 bg-gray-300 sm:w-1/2 w-4/5 rounded-lg text-right">
          {keys == "" ? "0" : keys}{" "}
          {errors && <span className="text-red-500">Error</span>}
        </p>
        <Keys keys={number} getNumber={getNumber} />
      </div>
    </div>
  );
};

export default Home;
