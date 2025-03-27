import { useParams } from "react-router-dom"


function QuizzPage() {


  const {level} = useParams()


  return (
    <div>Quizzes  of {level}</div>
  )
}

export default QuizzPage