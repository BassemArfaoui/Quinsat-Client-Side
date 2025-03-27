import { useParams, useLocation , useNavigate} from "react-router-dom";
import LevelCard from "../components/menu/ClassCard";

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
     <h1 className='text-[28px]  mt-6 mb-10 text-gray-700 text-center'><span className='bg-s px-2 py-1 rounded-lg ml-6 text-gray-400 cursor-pointer' onClick={()=>{navigate("/menu")}} > Branches</span>
     <span className="text-3xl">{"> "}</span>
     <span >Classes</span>
     </h1>

      <div className="flex justify-center mt-7 flex-wrap gap-x-6 gap-y-6 pb-5">
        <LevelCard
          branch={branch}
          level={2}
          fullname={branches[branch]}
          theme="bg-sky-500"
        />

        <LevelCard
          branch={branch}
          level={3}
          fullname={branches[branch]}
          theme="bg-sky-500"
        />

        <LevelCard
          branch={branch}
          level={4}
          fullname={branches[branch]}
          theme="bg-sky-500"
        />

        <LevelCard
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
