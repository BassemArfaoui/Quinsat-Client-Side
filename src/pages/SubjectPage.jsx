import { useParams , useNavigate } from "react-router-dom";
import SubjectCard from "../components/menu/SubjectCard";
import { FaGreaterThan } from "react-icons/fa";



function SubjectPage() {
  const { level } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-[28px]  mt-6 mb-10 text-gray-700 text-center flex items-center">
          <span
            className="bg-s px-2 py-1 rounded-lg ml-6 text-gray-400 cursor-pointer"
            onClick={() => {
              navigate("/menu");
            }}
          >
            Branches
          </span>

          {level !== "cba" && level !== "mpi" && (
            <>
              <span>
                <FaGreaterThan className="text-xl" />
              </span>

              <span
                className="bg-s px-2 py-1 rounded-lg text-gray-400 cursor-pointer"
                onClick={() => {
                  navigate(`/classes/${level.slice(0, -1)}`);
                }}
              >
                Classes
              </span>
            </>
          )}
          <span className="text-3xl">
            <FaGreaterThan className="text-xl" />
          </span>
          <span className="ml-2">Subjects</span>
        </h1>
      </div>

      <div className="flex justify-center mt-7 flex-wrap gap-x-6 gap-y-6 pb-5">
        <SubjectCard
          level={"RT3"}
          fullname={"Administartion de bases de données"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          level={"RT3"}
          fullname={"Administartion des réseaux"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          level={"RT3"}
          fullname={"Analyse des données"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          level={"RT3"}
          fullname={"Analyse numerique"}
          theme={"bg-blue-500"}
        />
        <SubjectCard level={"RT3"} fullname={"Anglais"} theme={"bg-blue-500"} />
        <SubjectCard
          level={"RT3"}
          fullname={"Français"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          level={"RT3"}
          fullname={"Ingénièrie de protocoles"}
          theme={"bg-blue-500"}
        />
        <SubjectCard level={"RT3"} fullname={"JEE"} theme={"bg-blue-500"} />
        <SubjectCard
          level={"RT3"}
          fullname={"Logique formelle"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          level={"RT3"}
          fullname={"Réseaux Radio-mobiles"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          level={"RT3"}
          fullname={"Sécurité des réseaux"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          level={"RT3"}
          fullname={"Signaux et Systèmes"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          level={"RT3"}
          fullname={"Procesus Stochastiques"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          level={"RT3"}
          fullname={"Marketing"}
          theme={"bg-blue-500"}
        />
      </div>
    </div>
  );
}

export default SubjectPage;
