import GaugeChart from "react-gauge-chart";
function DataScore() {
  return (
    <div className="flex mt-6 ">
      {/* GaugeChart */}
      <div className="bg-[#F9F9F9] flex-1 p-4 rounded-2xl">
        <p className="font-semibold mt-2 text-[12px] mb-3">
          Data Quality Score
        </p>
        <GaugeChart
          id="gauge-chart1"
          colors={["#D05739", "#FF9E00", "#076f0c"]}
          textColor="black"
          percent={0.6}
          arcWidth={0.25}
          needleScale={0.8}
        />
      </div>
      <div className="flex-1">table Chart</div>
    </div>
  );
}

export default DataScore;
