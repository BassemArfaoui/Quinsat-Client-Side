import { useParams, useNavigate } from "react-router-dom";
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
            <FaGreaterThan className="text-xl -mb-0.5" />
          </span>
          <span className="ml-2">Subjects</span>
        </h1>
      </div>

      <div className="flex justify-center mt-7 flex-wrap gap-x-6 gap-y-6 pb-5">
        <SubjectCard
          id={1}
          level={"rt3"}
          fullname={"Administartion de bases de données"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          id={2}
          level={"rt3"}
          fullname={"Administartion des réseaux"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          id={3}
          level={"rt3"}
          fullname={"Analyse des données"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          id={4}
          level={"rt3"}
          fullname={"Analyse numerique"}
          theme={"bg-blue-500"}
        />
        <SubjectCard id={5} level={"rt3"} fullname={"Anglais"} theme={"bg-blue-500"} />
        <SubjectCard
          id={6}
          level={"rt3"}
          fullname={"Français"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          id={7}
          level={"rt3"}
          fullname={"Ingénièrie de protocoles"}
          theme={"bg-blue-500"}
        />
        
        <SubjectCard id={8} level={"rt3"} fullname={"JEE"} theme={"bg-blue-500"} />
        <SubjectCard
          id={9}
          level={"rt3"}
          fullname={"Logique formelle"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          id={10}
          level={"rt3"}
          fullname={"Réseaux Radio-mobiles"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          id={11}
          level={"rt3"}
          fullname={"Sécurité des réseaux"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          id={12}
          level={"rt3"}
          fullname={"Signaux et Systèmes"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          id={13}
          level={"rt3"}
          fullname={"Procesus Stochastiques"}
          theme={"bg-blue-500"}
        />
        <SubjectCard
          id={14}
          level={"rt3"}
          fullname={"Marketing"}
          theme={"bg-blue-500"}
        />
      </div>
    </div>
  );
}

export default SubjectPage;
