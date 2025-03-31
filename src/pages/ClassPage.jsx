import { useParams, useLocation , useNavigate} from "react-router-dom";
import ClassCard from "../components/menu/ClassCard";
import { FaGreaterThan } from "react-icons/fa";

function ClassPage() {
  const { branch } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const branches = {
    rt: "Réseaux et Telecommunication",
    gl: "Genie Logiciel",
    imi: "Instrumentation et Maintenance Industrielle",
    iia: "Informatique Industrielle et Automatisme",
    ch: "Chimie Industrielle",
    bio: "Biologie Industrielle",
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-[28px]  mt-6 mb-10 text-gray-700 text-center flex items-center">
          <span
            className="px-2 rounded-lg ml-6 text-gray-400 cursor-pointer flex items-start"
            onClick={() => {
              navigate("/branches");
            }}
          >
            Branches
          </span>
          <span className="flex justify-center items-center">
            <FaGreaterThan className="text-xl -mb-0.5" />
          </span>
          <span className="ml-2">Classes</span>
        </h1>
      </div>

      <div className="flex justify-center mt-7 flex-wrap gap-x-6 gap-y-6 pb-5">
        <ClassCard
          branch={branch}
          level={2}
          fullname={branches[branch]}
          theme="bg-sky-500"
        />

        <ClassCard
          branch={branch}
          level={3}
          fullname={branches[branch]}
          theme="bg-sky-500"
        />

        <ClassCard
          branch={branch}
          level={4}
          fullname={branches[branch]}
          theme="bg-sky-500"
        />

        <ClassCard
          branch={branch}
          level={5}
          fullname={branches[branch]}
          theme="bg-sky-500"
        />
      </div>
    </div>
  );
}

export default ClassPage;
