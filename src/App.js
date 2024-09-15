import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />

      {/* <div className="font-lobster w-[90%] flex items-center justify-center min-h-screen text-4xl font-bold text-[#f45d48] mx-auto">
        Hello World.
      </div> */}
      <div className="font-lobster w-full flex min-h-screen text-4xl font-bold text-[#f45d48] ">
        <div className="flex items-center justify-center min-h-screen text-4xl font-bold bg-[#f45d48] text-[#1b1b27] w-[20%] mx-auto">
          Hello World - 1.
        </div>
        <div className="flex items-center justify-center min-h-screen text-4xl font-bold text-[#f45d48] w-[80%] mx-auto">
          Hello World - 2
        </div>
      </div>
      <Main />
    </>
  );
}

export default App;
