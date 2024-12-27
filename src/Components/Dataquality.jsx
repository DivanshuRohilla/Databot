import DataTable from "./DataTable";
import DataScore from "./DataScore";

const Dataquality = () => {
  return (
    <div>
      <h3 className="font-semibold my-4 pb-2 border-b-[1px] ">Data Quality</h3>
      <DataScore />
      <div className="flex gap-3">
        {/* Need to make it more reusable component */}
        <DataTable heading="Table Heading" />
        <DataTable heading="Test Result Breakdown" />
        <DataTable heading="Monitored Results" />
      </div>
    </div>
  );
};

export default Dataquality;
