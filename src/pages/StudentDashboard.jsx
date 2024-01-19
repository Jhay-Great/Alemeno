import React from 'react'

function StudentDashboard() {
  return (
    <div className='h-screen flex'>
        {/* navigation */}
        <aside className='w-16 py-3 bg-slate-500 flex flex-col justify-between items-center'>
            {/* user navigation items */}
            <section className="">
                {/* logo */}
                <button className="">AL</button>
            </section>

            {/* page support navigation */}

        </aside>
        {/* main dashboard */}
        <main className='flex-auto bg-gradient-to-tl from-slate-500 to-slate-700 px-10 pt-5'>
            <p className='text-3xl'>Welcome to your Student Dashboard</p>
            {/* courses enrolled in */}
            <section>
                {/* ongoing courses */}
                <div className="">
                    <p>Ongoing Courses</p>
                </div>
                {/* completed courses */}
                
            </section>
        </main>
    </div>
  )
}

export default StudentDashboard