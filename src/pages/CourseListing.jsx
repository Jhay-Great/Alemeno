import React, { useEffect } from 'react'
import useApi from '../hooks/Api'


const programs = ['maths', 'english', 'science', 'IT', 'languages'];



function CourseListing() {
    
    // const result = useApi();
    // console.log(result)
    
  return (
    <>
        {/* header */}
        <header className='h-screen bg-cyan-600 flex flex-col justify-center'>
            <h1 className='text-4xl font-bold'>Welcome to ALearn</h1>
            <p>Review and select a program of your choice</p>
            <a href='#courses' className='bg-cyan-900 w-fit p-2 rounded' >Click to view courses</a>
        </header>

        {/* main */}
        <main className='min-h-screen pt-20 bg-red-500 flex flex-col gap-12  '>
            <h2 className='text-3xl font-bold'>Courses</h2>
            <section id="courses" className='w-full flex-1 flex justify-center items-center gap-5 flex-wrap '>
                {programs.map(program => 
                <div key={program} 
                className='bg-yellow-500 w-52 h-40 rounded-xl lg:w-80 lg:h-72 '
                >
                    <p>
                        {program}
                    </p>
                    <button className='bg-blue-500 hover:bg-cyan-600 active:border w-fit p-2 rounded'>Start</button>
                </div>)}
            </section>
        </main>

    </>

  )
}

export default CourseListing