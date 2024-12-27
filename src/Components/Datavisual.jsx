import Dataoverview from "./Dataoverview";
import Dataquality from "./Dataquality";

export default function Datavisual() {
  return (
    <div className="bg-white flex-1 py-4 px-0 m-4 mr-4 px-8 rounded-lg shadow-lg">
      <h2 className="font-bold text-[1.5rem] font-[#3C3C3C] border-b-2 pb-2">
        Data Visual
      </h2>
      <Dataoverview />
      <Dataquality />
    </div>
  );
}
