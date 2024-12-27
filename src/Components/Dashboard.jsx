import Databot from "../Components/Databot";
import Datavisual from "../Components/Datavisual";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
  return (
    <div className="flex h-[130vh] w-[100%] gap-[1rem] lg:flex-wrap max-width-[1700px] my-0 mx-auto">
      <Sidebar />
      <Databot />
      <Datavisual />
    </div>
  );
}

export default Dashboard;
