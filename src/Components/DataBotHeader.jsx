import databotLogo from "../assets/AI_Generate.png";

function DatabotHeader() {
  return (
    <div className="flex mb-2 justify-between pb-2 items-center border-b-2">
      <div className="flex gap-3 items-center">
        <p className="font-bold text-[1.5rem] font-[#3C3C3C]">Databot</p>
        <img src={databotLogo} className="w-[100%]" />
      </div>
      <div className="data_options">
        <p>
          Connected Data:{" "}
          <span className="text-blue-900 font-semibold">Clothing Sales</span>
        </p>
      </div>
    </div>
  );
}

export default DatabotHeader;
