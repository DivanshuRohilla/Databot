import dataOver from "../assets/data-overview.png";

const Dataoverview = () => {
  return (
    <div>
      <h3 className="font-semibold my-4 pb-2 border-b-[1px]">Data Overview</h3>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 bg-[#F9F9F9] py-4 px-4 rounded-[1rem]">
            <img
              src={dataOver}
              alt="Data"
              className="bg-white rounded-lg p-2"
            />
            <div>
              <p className="text-[13px] text-[#001F63]">
                Total Numbers of Rows
              </p>
              <p className="font-bold">34.1M</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#F9F9F9] py-4 px-4 rounded-[1rem]">
            <img
              src={dataOver}
              alt="Data"
              className="bg-white rounded-lg p-2 rotate-180"
            />
            <div>
              <p className="text-[13px] text-[#001F63]">
                Total Number of Columns
              </p>
              <p className="font-bold">2</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 bg-[#F9F9F9] px-4 py-4 rounded-lg">
            <p className="text-[#001F63] text-[13px] font-semibold mb-4">
              Metadata
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 text-[12px]">Name</span>
                <span className="font-semibold text-[12px]">Samples</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-[12px]">Created At</span>
                <span className="font-semibold text-[12px]">20 Jul 2022</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-[12px]">Relates To</span>
                <span className="font-semibold text-[12px]">dim_books</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-[12px]">Connection</span>
                <span className="font-semibold text-[12px]">PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-[#F9F9F9] px-4 py-4 rounded-lg">
            <p className="text-[#001F63] text-[13px] font-semibold mb-4">SLA</p>
            <div className="flex items-center justify-between gap-2 mb-4">
              <progress value={1} max={1} className="w-full"></progress>
              <p className="text-[#898989] text-[13px] font-semibold">5/5</p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-[13px] font-semibold">Test Report</p>
                <p className="text-[#001F63] text-[11px] font-semibold cursor-pointer">
                  See All
                </p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-[13px] font-semibold">100% Score</p>
                <p className="text-[#898989] text-[13px]">5 Tests</p>
              </div>
              <progress value={100} max={100} className="w-full"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dataoverview;
