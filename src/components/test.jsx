import React from "react";

const Test = () => {
  return (
    <div>
      <div className="w-96 px-2.5 py-7 origin-top-left rotate-[10deg] bg-red-700 rounded-2xl border-l-4 border-r-4 border-t-4 border-b-[10.74px] border-black inline-flex flex-col justify-start items-center gap-3.5">
        {" "}
        <div className="self-stretch pl-1 flex flex-col justify-start items-start gap-2">
          {" "}
          <div className="self-stretch justify-center text-white text-3xl font-normal font-['Dela_Gothic_One'] leading-loose">
            Minesweeper
          </div>{" "}
          <div className="self-stretch justify-center text-white text-base font-semibold font-['Bricolage_Grotesque'] leading-none">
            Outsmart opponents & win MFS Coins
          </div>{" "}
        </div>{" "}
        <div className="w-96 h-96 relative bg-white rounded-xl overflow-hidden">
          {" "}
          <img
            className="w-72 h-72 left-[48.10px] top-[53.54px] absolute shadow-[0px_4.502625942230225px_10.50612735748291px_0px_rgba(0,0,0,0.10)] shadow-[0px_19.51137924194336px_19.51137924194336px_0px_rgba(0,0,0,0.09)] shadow-[0px_43.525386810302734px_25.514881134033203px_0px_rgba(0,0,0,0.05)] shadow-[0px_76.54463958740234px_30.017507553100586px_0px_rgba(0,0,0,0.01)] shadow-[0px_120.07003021240234px_33.019256591796875px_0px_rgba(0,0,0,0.00)]"
            src="https://placehold.co/278x278"
          />{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Test;
