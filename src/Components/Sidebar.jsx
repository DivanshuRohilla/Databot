import sidebarLogo from "../assets/logo-sidebar.svg";
import chart from "../assets/chart.png";
import AIBlack from "../assets/AI_Black.png";
import plus from "../assets/Group 766.png";

function Sidebar() {
  return (
    <div className="bg-white flex-none w-20 px-4 py-4 m-4 ml-4 rounded-lg shadow-lg text-center relative">
      <div className="border-b-2 border-[#e7e7e7] pb-4">
        <img src={sidebarLogo} className="w-full max-w-[50px] min-w-[50px]" />
      </div>
      <div className="mt-4">
        <div className="flex flex-col gap-6 items-center p-4">
          <div className="p-2 bg-[#e7e7e7] rounded-lg cursor-pointer ">
            <img src={chart} className="max-w-[30px]  rounded-lg" />
          </div>

          <div className="p-2 bg-[#e7e7e7] rounded-lg cursor-pointer ">
            <img src={AIBlack} className="max-w-[30px]  rounded-lg" />
          </div>
          <div className="p-2 bg-[#e7e7e7] rounded-lg cursor-pointer ">
            <img src={plus} className="max-w-[30px]  rounded-lg" />
          </div>
        </div>
        <div className="border-t-2 border-[#e7e7e7] absolute bottom-0 mb-4 left-[4%] pt-6 w-[90%]x">
          <span className="text-center w-full px-5 py-2 bg-[#2a4ad773] rounded-lg text-black text-2xl font-bold">
            S
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
