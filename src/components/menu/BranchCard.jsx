import { useNavigate } from "react-router-dom";

function BranchCard({ abbrev, fullname, theme , prepa}) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (!prepa) {
      navigate(`/classes/${abbrev}`);
    } else {
      navigate(`/subjects/${abbrev}`);
    }
  };

  return (
    <div className="w-65 border-2 rounded-3xl shadow-xl cursor-pointer">
      <div
        className={`flex justify-center items-center h-13 ${theme} rounded-t-3xl`}
      >
        <h1 className="text-xl font-bold font-roboto-mono text-white uppercase  ">
          {abbrev}
        </h1>
      </div>

      <div className="p-3 h-20">
        <p className="text-xl text-center font-roboto-mono w-full text-gray-700 line-clamp-2 overflow-hidden">
          {fullname}
        </p>
      </div>

      <div className="flex justify-center mb-2 mt-1 cursor-pointer">
        <button
          className={`text-xl ${theme} rounded-xl text-white flex text-center justify-center items-center font-medium cursor-pointer font-roboto-mono px-3 py-1`}
          onClick={handleNavigation}
        >
          Open
        </button>
      </div>
    </div>
  );
}

export default BranchCard;
