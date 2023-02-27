import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Body = () => {
  return (
    <>
      <div className=" w-[100%] bg-color-dark mr-[2.5rem] ml-[4rem]">
        <div className="flex justify-between  ml-[4rem] ">
          <div className="flex   mt-[3rem] gap-[3rem]">
            <div className="flex text-white-text font-bold  text-[1.75rem] gap-[1.5rem] items-center pr-[3rem] ">
              {" "}
              {<AiOutlineLeft className="" />} {<AiOutlineRight className="" />}{" "}
            </div>{" "}
            <div className="flex items-center pt-[1.75rem] pb-[1.75rem] pl-[2rem] pr-[1.5rem] gap-[2.5rem] font-bold w-[25 rem] h-[2.5rem] border-Grey-text border-2 rounded-full  ">
              {" "}
              {<FiSearch className="text-Grey-text h-[2rem] w-[2rem]" />}{" "}
              <input type="text" className="bg-color-dark w-[20rem] h-[2rem] " placeholder="Search everything" />{" "}
              <button className=""> {<GoSettings className="text-Grey-text h-[2rem] w-[2rem]" />} </button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex gap-[2rem] mt-[2.75rem] mr-[3.5rem] items-center">
            <button className="text-white-text text-[2rem] "> {<BiMessageSquareDetail className="" />} </button>{" "}
            <button className="text-white-text text-[2.5rem]"> {<IoMdNotificationsOutline className="" />} </button>{" "}
            <Link href="#" className="">
              {" "}
              <img className="w-[3rem] h-[3rem] rounded-full border-2 " src="/avatar1.jpg" alt="#" />{" "}
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-[97%] h-[30%] bg-white-text rounded-[1.5rem] mt-[4rem] relative ">
          <img className=" w-[100%] h-[100%] rounded-[1.5rem]  " src="/banner.jpg" alt="#" />
          <div className="absolute top-[5rem] left-[5rem] flex flex-col ">
            <div className="text-white-text text-[8rem] "> Phim siu nhân </div> <div className=""> </div>{" "}
            <div className=" flex items-center font-bold text-white-text text-[1.3rem] w-[3rem] h-[3rem] ml-[1rem] mt-[5rem]  ">
              <img className="  w-[2rem] h-[1.5rem] " src="/imdb.png" alt="#" />
              <div> 7.8 </div> <img className=" ml-[2rem]  " src={`/american.png `} alt="#" />
              <div> English </div>{" "}
            </div>{" "}
            <div className="mt-[7rem] flex items-center gap-[2rem] ">
              <button className="bg-button-red  w-[10rem] h-[4.5rem] text-[1.5rem] rounded-[2rem]  text-white-text font-bold  ">Watch</button>{" "}
              <div className="flex items-center relative">
                <img className="w-[3rem] h-[3rem] rounded-full " src="/avatar1.jpg" alt="#" />{" "}
                <img className="w-[3rem] h-[3rem] rounded-full absolute left-[1.2rem]" src="/avatar1.jpg" alt="#" />{" "}
                <img className="w-[3rem] h-[3rem] rounded-full absolute left-[2.4rem]" src="/avatar1.jpg" alt="#" />{" "}
                <div className="ml-[3.5rem] text-Grey-text text-[1.2rem] font-bold ">+5 friends are watching</div>
              </div>
              <div className="ml-[35rem] flex relative items-center">
                <button className=" w-[2rem] h-[2rem] bg-button-red items-center font-bold  rounded-full flex justify-center ">
                  {" "}
                  {<AiOutlineLeft className=" text-white-text text-[1.2rem] " />}{" "}
                </button>{" "}
                <img className=" w-[8rem] h-[5rem] rounded-[0.5rem] ml-[0.5rem] " src="/banner.jpg" alt="#" />
                <img className=" w-[8rem] h-[5rem] rounded-[0.5rem] ml-[0.5rem] " src="/banner.jpg" alt="#" />
                <img className=" w-[8rem] h-[5rem] rounded-[0.5rem] ml-[0.5rem] " src="/banner.jpg" alt="#" />
                <button className=" w-[2rem] h-[2rem] bg-button-red items-center font-bold  rounded-full flex justify-center absolute left-[26.5rem] ">
                  {" "}
                  {<AiOutlineRight className=" text-white-text text-[1.2rem] " />}{" "}
                </button>{" "}
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-[97%] h-[20%] mt-[4rem] flex flex-col gap-[2rem]">
          <div className="text-white-text font-bold text-[2rem] flex items-center">
            Parties
            <div className="w-[2.4rem] h-[1.2rem] bg-button-red rounded-[0.5rem] ml-[4rem]"></div>
          </div>
          <div className="flex gap-[1.75rem]">
            <div className="w-[27rem] h-[15rem] rounded-[1.75rem] bg-hex-grey flex flex-col">
              <div className="flex relative mt-[1.5rem] ml-[1rem] justify-between">
                <img className=" w-[6.5rem] h-[4.5rem] rounded-[0.5rem] ml-[0.5rem] " src="/banner.jpg" alt="#" />
                <div className="flex relative mr-[4.5rem] items-center">
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full " src="/avatar1.jpg" alt="#" />{" "}
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full absolute left-[1.2rem]" src="/avatar1.jpg" alt="#" />{" "}
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full absolute left-[2.4rem]" src="/avatar1.jpg" alt="#" />{" "}
                </div>
              </div>
              <div className="text-white-text text-[1.5rem]  font-bold ml-[1.5rem] mt-[2rem]">Phim siu nhan</div>
              <div className=" text-Grey-text text-[1.2rem] ml-[1.5rem] mt-[1.5rem] font-bold">Phim hanh dong, phim tam ly tinh cam</div>
            </div>
            <div className="w-[27rem] h-[15rem] rounded-[1.75rem] bg-hex-grey">
              <div className="flex relative mt-[1.5rem] ml-[1rem] justify-between">
                <img className=" w-[6.5rem] h-[4.5rem] rounded-[0.5rem] ml-[0.5rem] " src="/banner.jpg" alt="#" />
                <div className="flex relative mr-[4.5rem] items-center">
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full " src="/avatar1.jpg" alt="#" />{" "}
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full absolute left-[1.2rem]" src="/avatar1.jpg" alt="#" />{" "}
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full absolute left-[2.4rem]" src="/avatar1.jpg" alt="#" />{" "}
                </div>
              </div>
              <div className="text-white-text text-[1.5rem]  font-bold ml-[1.5rem] mt-[2rem]">Phim siu nhan</div>
              <div className=" text-Grey-text text-[1.2rem] ml-[1.5rem] mt-[1.5rem] font-bold">Phim hanh dong, phim tam ly tinh cam</div>
            </div>
            <div className="w-[27rem] h-[15rem] rounded-[1.75rem] bg-hex-grey">
              <div className="flex relative mt-[1.5rem] ml-[1rem] justify-between">
                <img className=" w-[6.5rem] h-[4.5rem] rounded-[0.5rem] ml-[0.5rem] " src="/banner.jpg" alt="#" />
                <div className="flex relative mr-[4.5rem] items-center">
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full " src="/avatar1.jpg" alt="#" />{" "}
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full absolute left-[1.2rem]" src="/avatar1.jpg" alt="#" />{" "}
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full absolute left-[2.4rem]" src="/avatar1.jpg" alt="#" />{" "}
                </div>
              </div>
              <div className="text-white-text text-[1.5rem]  font-bold ml-[1.5rem] mt-[2rem]">Phim siu nhan</div>
              <div className=" text-Grey-text text-[1.2rem] ml-[1.5rem] mt-[1.5rem] font-bold">Phim hanh dong, phim tam ly tinh cam</div>
            </div>
            <div className="w-[27rem] h-[15rem] rounded-[1.75rem] bg-hex-grey">
              <div className="flex relative mt-[1.5rem] ml-[1rem] justify-between">
                <img className=" w-[6.5rem] h-[4.5rem] rounded-[0.5rem] ml-[0.5rem] " src="/banner.jpg" alt="#" />
                <div className="flex relative mr-[4.5rem] items-center">
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full " src="/avatar1.jpg" alt="#" />{" "}
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full absolute left-[1.2rem]" src="/avatar1.jpg" alt="#" />{" "}
                  <img className="w-[2.5rem] h-[2.5rem] rounded-full absolute left-[2.4rem]" src="/avatar1.jpg" alt="#" />{" "}
                </div>
              </div>
              <div className="text-white-text text-[1.5rem]  font-bold ml-[1.5rem] mt-[2rem]">Phim siu nhan</div>
              <div className=" text-Grey-text text-[1.2rem] ml-[1.5rem] mt-[1.5rem] font-bold">Phim hanh dong, phim tam ly tinh cam</div>
            </div>
          </div>
        </div>{" "}
        <div className="w-[97%] h-[25%] mt-[4rem] flex flex-col gap-[4rem]">
          <div className="text-white-text font-bold text-[2rem] flex ">
            Continue Watching
            <div className="w-[2.4rem] h-[1.2rem] bg-button-red rounded-[0.5rem] ml-[4rem]"></div>
          </div>
          <div className="flex gap-[1.75rem]">
            <img className=" w-[26.8rem] h-[17rem] rounded-[1.75rem]  " src="/banner.jpg" alt="#" />
            <img className=" w-[26.8rem] h-[17rem] rounded-[1.75rem]  " src="/banner.jpg" alt="#" />
            <img className=" w-[26.8rem] h-[17rem] rounded-[1.75rem]  " src="/banner.jpg" alt="#" />
            <img className=" w-[26.8rem] h-[17rem] rounded-[1.75rem]  " src="/banner.jpg" alt="#" />
          </div>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Body;
