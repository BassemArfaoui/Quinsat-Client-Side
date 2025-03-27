import { useNavigate } from "react-router-dom";


function SubjectCard({ level, fullname, theme }) {
    const navigate = useNavigate();

    const handleNavigation = () => {
     
        navigate(`/quizzes/${level}`);
   
    };
  
    return (
      <div className="w-65 border-2 rounded-3xl shadow-xl cursor-pointer">
        <div
          className={`flex justify-center items-center h-13 ${theme} rounded-t-3xl`}
        >
          <h1 className="text-xl font-bold font-roboto-mono text-white uppercase  ">
            {level}
          </h1>
        </div>
  
        <div className="pt-3 h-20">
          <p className="text-xl text-center font-roboto-mono w-full text-gray-700 line-clamp-2 overflow-hidden">
            {fullname}
          </p>
        </div>

          <p className="text-sm text-center font-roboto-mono w-full text-gray-500 line-clamp-2 overflow-hidden mb-4">
            (2 Quizzes)
          </p>
          
        <div className="flex justify-center mb-2 mt-1 cursor-pointer">
          <button
            className={`py-1 text-xl ${theme} px-3 rounded-xl text-white flex text-center justify-center items-center font-medium cursor-pointer font-roboto-mono`}
            onClick={handleNavigation}
          >
            Open
          </button>
        </div>
      </div>
    );
}

export default SubjectCard