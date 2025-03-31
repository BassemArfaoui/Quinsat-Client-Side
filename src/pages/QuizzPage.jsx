import { FaGreaterThan } from "react-icons/fa";
import { useParams , useNavigate } from "react-router-dom"


function QuizzPage() {

  const navigate = useNavigate()
  const {subject_id , level} = useParams()


  return (
    <div>
          <div className="flex justify-center">
        <h1 className="text-[28px]  mt-6 mb-10 text-gray-700 text-center flex items-center">
          <span
            className="bg-s px-2  rounded-lg ml-6 text-gray-400 cursor-pointer"
            onClick={() => {
              navigate("/branches");
            }}
          >
            Branches
          </span>

          {level !== "cba" && level !== "mpi" && (
            <>
              <span>
                <FaGreaterThan className="text-xl -mb-0.5" />
              </span>

              <span
                className="bg-s px-2 rounded-lg text-gray-400 cursor-pointer"
                onClick={() => {
                  navigate(`/classes/${level.slice(0, -1)}`);
                }}
              >
                Classes
              </span>
            </>
          )}
          <span className="text-3xl">
            <FaGreaterThan className="text-xl -mb-0.5" />
          </span>
          <span
                className="px-2 rounded-lg text-gray-400 cursor-pointer"
                onClick={() => {
                  navigate(`/subjects/${level}`);
                }}
              >
                Subjects
              </span>
              <span>
            <FaGreaterThan className="text-xl -mb-0.5" />
          </span>
          <span className="ml-2">Quizzes</span>
        </h1>
      </div>

      <div>Quizzes  of subject with id  {subject_id} of class {level}</div>
    </div>
  )
}

export default QuizzPage