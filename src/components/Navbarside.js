import { Link } from "react-router-dom";
import { AiFillCompass } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsWifi2 } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
const Navbarside = () => {
  return (
    <>
      <div className="w-[34rem] mx-[2rem]  border-r border-opacity-50 border-Grey-text">
        <div className="mt-[3.5rem] ml-[2rem]">
          <Link className="item gap-[0.5rem] " href="#">
            <img className="w-[3.75rem] h-[3rem]  " src="/code.png" alt="logo" />
            <div className="flex text-3xl pt-[0.5rem] ">
              <div className="textwhite hoverwhite"> Movie. </div> <div className="red"> Hiedesign </div>
            </div>{" "}
          </Link>{" "}
        </div>{" "}
        <div className="pt-[0.5rem] ml-[4rem]">
          <div className="textgrey  mt-[3rem] text-[1.20rem] hoverwhite"> News Feed </div>{" "}
          <div className="flex flex-col text-2xl text-Grey-text gap-[2.75rem]  mt-[3rem]">
            <div className=" ">
              <Link className="flex gap-[0.5rem]  " href="#">
                <div className="item textgrey text-center gap-[1.75rem] text-[1.3rem] hoverwhite">
                  {<AiFillCompass className="w-[2rem] h-[2rem] " />}
                  Browse{" "}
                </div>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="watchlist">
              <Link className="flex gap-[0.5rem] " href="#">
                <div className="item textgrey text-center gap-[1.75rem] text-[1.3rem] hoverwhite ">
                  {<BiHeart className="w-[2rem] h-[2rem]" />}
                  Watchlist{" "}
                </div>{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          <hr className="border-Grey-text border-opacity-50 mt-[3.5rem]  w-[16rem]" />
        </div>{" "}
        <div className="ml-[4rem] gap-[3rem] flex-col flex">
          <div className="textgrey mt-[2.75rem] text-[1.20rem]"> Following </div>{" "}
          <div className="gap-[1.5rem] flex-col flex">
            <Link href="#" className="textgrey text-[1.20rem] flex w-[15rem] justify-between item">
              <div className=" gap-[1rem] item">
                <img className="w-[2.5rem] h-[2.5rem] rounded-full " src="/avatar1.jpg" alt="#" />
                Hakimi{" "}
              </div>{" "}
              {<BsWifi2 className="textwhite w-[1.5rem] h-[1.5rem] " />}{" "}
            </Link>{" "}
            <Link href="#" className="textgrey text-[1.20rem] flex w-[15rem] justify-between item">
              <div className=" gap-[1rem] item">
                <img className="w-[2.5rem] h-[2.5rem] rounded-full " src="/avatar1.jpg" alt="#" />
                Ronaldo{" "}
              </div>{" "}
              {<BsWifi2 className="textwhite w-[1.5rem] h-[1.5rem] " />}{" "}
            </Link>{" "}
            <Link href="#" className="textgrey text-[1.20rem] flex w-[15rem] justify-between item">
              <div className="flex gap-[1rem] item">
                <img className="w-[2.5rem] h-[2.5rem] rounded-full " src="/avatar1.jpg" alt="#" />
                Empabe{" "}
              </div>{" "}
              {<BsWifi2 className="textwhite w-[1.5rem] h-[1.5rem] " />}{" "}
            </Link>{" "}
            <Link href="#" className="textgrey text-[1.20rem]  w-[15rem] justify-between item">
              <div className=" gap-[1rem] item">
                <img className="w-[2.5rem] h-[2.5rem] rounded-full  " src="/avatar1.jpg" alt="#" />
                Messi{" "}
              </div>{" "}
              {<BsWifi2 className="textwhite w-[1.5rem] h-[1.5rem] " />}{" "}
            </Link>{" "}
            <Link href="#" className="textgrey text-[1.20rem]  w-[15rem] justify-between item">
              <div className=" gap-[1rem] item">
                <img className="w-[2.5rem] h-[2.5rem] rounded-full  " src="/avatar1.jpg" alt="#" />
                Halan{" "}
              </div>{" "}
              {<BsWifi2 className="textwhite w-[1.5rem] h-[1.5rem] " />}{" "}
            </Link>{" "}
            <Link href="#" className="textgrey text-[1.20rem]  w-[15rem] justify-between item">
              <div className=" gap-[1rem] item">
                <img className="w-[2.5rem] h-[2.5rem] rounded-full  " src="/avatar1.jpg" alt="#" />
                Debroyne{" "}
              </div>{" "}
              {<BsWifi2 className="textwhite w-[1.5rem] h-[1.5rem] " />}{" "}
            </Link>{" "}
          </div>{" "}
          <div className="textgrey item text-[1.20rem] gap-[1.5rem]">
            <button className="p-[0.5rem] rounded-full bg-red-loadmore flex justify-center">
              <MdExpandMore className=" w-[1.5rem] h-[1.5rem] textwhite " />
            </button>
            Load more{" "}
          </div>{" "}
        </div>{" "}
        <hr className="border-Grey-text border-opacity-50 ml-[4rem] mt-[3rem]  w-[16rem]" />
        <button className=" text-Grey-text  ml-[4rem] mt-[3rem] text-[1.3rem] gap-[1.75rem] item font-bold">
          {<RiLogoutBoxRLine className=" w-[2rem] h-[2rem] textwhite" />}
          Log Out{" "}
        </button>{" "}
      </div>{" "}
    </>
  );
};

export default Navbarside;
