"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const mainBoard = useRef();
  const [translateValue, setTranslateValue] = useState(0);
  const btnNextPage = useRef();
  const btnPrePage = useRef();

  const numberOfPages = 4;

  const btnNextPageClicked = (e) => {
    window.scrollBy(0, window.innerHeight);
    // setTranslateValue((pre) => {
    //   mainBoard.current.style.transform = `translateY(${pre - 100}%)`;
    //   return pre - 100;
    // });
  };
  const btnPrevPageClicked = (e) => {
    setTranslateValue((pre) => {
      mainBoard.current.style.transform = `translateY(${pre + 100}%)`;
      return pre + 100;
    });
  };

  return (
    <>
      <button
        disabled={translateValue <= -(numberOfPages - 1) * 100 ? true : false}
        onClick={btnNextPageClicked}
        ref={btnNextPage}
        className=" fixed top-3 right-5 bg-green-600 p-3 rounded-lg z-0 disabled:bg-slate-500"
      >
        Next Page
      </button>
      <button
        disabled={translateValue >= 0 ? true : false}
        onClick={btnPrevPageClicked}
        ref={btnPrePage}
        className="fixed top-3 right-36 bg-yellow-600 p-3 rounded-lg z-50 disabled:bg-slate-500"
      >
        Prev Page
      </button>
      <main ref={mainBoard} className=" w-screen h-screen bg-red-600">
        <div className=" bg-orange-300 h-full z-1">Page 1</div>
        <div className=" bg-lime-200 h-full z-1">Page 2</div>
        <div className=" bg-blue-300 h-full z-1">Page 3</div>
        <div className=" bg-teal-700 h-full z-1">Page 4</div>
      </main>
    </>
  );
}
