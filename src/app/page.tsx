"use client";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Home() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center mb-12">Count is {counter}</div>
      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(10));
          }}
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Incement By 10
        </button>
      </div>
    </main>
  );
}
