import arrow from "../assets/arrow.png";
const data = [
  {
    item: "Give me the summary of the data Source.",
  },
  {
    item: "User duration engagement change vs last week?",
  },
  {
    item: "Provide an overview of this week's IAP Revenue performance .",
  },
  {
    item: "What are the factors of drop in our Sales Revenue this week?",
  },
];

function ShortcutBox() {
  return (
    <div className="flex items-center justify-between flex-wrap gap-2 mt-8">
      {data.map((item, index) => {
        return (
          <>
            <div
              className="flex p-4 border-[#DADADA] border-[2px] w-[49%] justify-between items-center gap-2 h-[4rem] rounded-lg"
              key={index}
            >
              <p className="text-[11px] text-start">{item.item}</p>
              <div className="border-[2px] p-1 rounded cursor-pointer">
                <img
                  src={arrow}
                  className="w-[100%] max-w-[10px] min-w-[10px]  "
                />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ShortcutBox;
