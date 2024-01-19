import React from 'react'

function CourseDetails() {
  return (
    <main className='bg-red-800 h-screen flex flex-col'>
        {/* top section containing important course info */}
        <section className='*:mb-3 w-full h-fit px-3 py-3 bg-slate-900'>
            {/* name of course */}
            <h1 className='text-5xl '>Course name</h1>
            {/* instructor and enrollment status */}
            <div className="flex justify-between items-center gap-5">
                <p className='text-lg'>Instructor name</p>
                <p className='text-lg'>Enrollment Status</p>
            </div>
            <p className='text-xl'>Description</p>
        </section>
        <section className='*:mb-5 w-full px-3 flex-auto bg-slate-600'>
            <p className='text-lg '>Course duration</p>
            <p className='text-lg '>Schedule</p>
            <p className='text-lg '>Pre-requisites</p>
            <p className='text-lg '>syllabus</p>
        </section>
    </main>
  )
}

export default CourseDetails