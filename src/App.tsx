import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center">
      <button
        onClick={() => dispatch(increment())}
        className="py-2 px-3 font-semibold border mt-5 rounded-xl bg-white border-black text-black"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="py-2 px-3 font-semibold border mt-5 rounded-xl bg-white border-black text-black"
      >
        IncrementByValue
      </button>
      <div>{count}</div>
      <button
        onClick={() => dispatch(decrement())}
        className="py-2 px-3 font-semibold border mt-5 rounded-xl bg-white border-black text-black"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
