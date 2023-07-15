import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
function App() {
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <div className="flex justify-center">
      <button className="py-2 px-3 font-semibold border mt-5 rounded-xl bg-white border-black text-black">
        Increment
      </button>
      <div>{count}</div>
      <button className="py-2 px-3 font-semibold border mt-5 rounded-xl bg-white border-black text-black">
        Decrement
      </button>
    </div>
  );
}

export default App;
