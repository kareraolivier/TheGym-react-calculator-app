import { operator } from "./utils";
const Keys = ({
  keys,
  getNumber,
}: {
  keys: { num: string }[];
  getNumber: (numkey: string) => void;
}) => {
  return (
    <div className="flex justify-center flex-wrap sm:w-1/2 w-4/5 bg-gray-300 rounded-xl shadow-xl px-5 py-16 gap-2">
      {keys.map((key: { num: string }, index: number) => (
        <div
          onClick={() => getNumber(key.num)}
          key={index}
          className="shadow-lg rounded-md bg-gray-100 cursor-pointer hover:bg-green-600 hover:text-white hover:shadow-xl"
        >
          <p
            className={`font-bold text-2xl py-4 px-6 ${
              operator().includes(key.num)
                ? "bg-green-600 text-white rounded-lg"
                : ""
            }${key.num == "A/C" ? "bg-red-600 text-white rounded-lg" : ""}`}
          >
            {key.num}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Keys;
