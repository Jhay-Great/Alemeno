import { useState } from 'react'
import CourseListing from './pages/CourseListing'
import CourseDetails from './pages/CourseDetails'
import StudentDashboard from './pages/StudentDashboard'
import lotteryPromise from '../promise'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CourseListing /> */}
      {/* <CourseDetails /> */}
      <StudentDashboard />
    </>
  )
}

export default App