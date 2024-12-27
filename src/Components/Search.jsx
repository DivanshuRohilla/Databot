import generate from "../assets/Generate B.png";
const Search = () => {
  return (
    <div
      className="flex items-center bg-[#E7E7E7] justify-between px-4 mt-3 rounded-full
    absolute bottom-0 mb-4 w-[90%] py-[0.5rem]"
    >
      <input
        type="text"
        placeholder="Ask your AI for data summary......."
        className="bg-transparent w-[100%] h-[auto] focus:outline-none text-[#AAAAAA] ml-4"
      />
      <button
        type="button"
        className="flex bg-black text-white gap-2 rounded-full pt-2 pr-8 pb-2 pl-4"
      >
        <img src={generate} />
        Search
      </button>
    </div>
  );
};

export default Search;
