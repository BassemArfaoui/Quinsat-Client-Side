import  { Suspense , lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from '../components/layouts/Main'
import Test from '../components/test/Test'
import './App.css'
import '../components/test/Test.jsx'
const HomePage = lazy(() => import('../pages/HomePage'))
const BranchPage = lazy(() => import('../pages/BranchPage'))
const ClassPage = lazy(() => import('../pages/ClassPage'))
const FavouritePage = lazy(() => import('../pages/FavouritePage'))
const AddPage = lazy(() => import('../pages/AddPage'))
const SettingsPage = lazy(() => import('../pages/SettingsPage'))
const QuizzPage = lazy(() => import('../pages/QuizzPage'))
const SubjectPage = lazy(() => import('../pages/SubjectPage'))


function App() {
  return (
    <div className='text-3xl font-bold'>
      <Router>
        <Main>


            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/menu" element={<BranchPage />} />
              <Route path="/classes/:branch" element={<ClassPage />} />
              <Route path="/subjects/:level" element={<SubjectPage />} />
              <Route path="/quizzes/:level" element={<QuizzPage />} />
              <Route path="/favourite" element={<FavouritePage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/test" element={<Test />} />
            </Routes>
        </Main>
      </Router>
    </div>
  )
}

export default App
