import DatabotHeader from "../Components/DataBotHeader";
import Intro from "../Components/Intro";
import Search from "./Search";
import ShortcutBox from "./ShortcutBox";
import Summary from "./Summary";

function Databot() {
  return (
    <div className="bg-white flex-1 px-8 py-4  my-4 rounded-xl shadow-lg relative ">
      <DatabotHeader />
      <Intro />
      <ShortcutBox />
      <Summary />
      <Search />
    </div>
  );
}

export default Databot;
