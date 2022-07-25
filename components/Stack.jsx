import React from 'react'

export default function Stack({isActive}) {
  return (
    <section className='flex flex-col gap-8'>
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl md:text-3xl">Languages known</h1>

            <div className="flex">
              <ul className="linguals flex flex-col gap-3 font-medium border-opacity-25 text-xl mt-5 border-r-2 border-r-gray-300 pr-2 sm:pr-5">
                <li>Tamil</li>
                <li>English</li>
                <li>
                  Hindi <span className='opacity-40'>(in Progress)</span>
                </li>
              </ul>

              <ul className="progLangs flex flex-col gap-3 font-medium text-xl mt-5 ml-3 sm:ml-5">
                <li>HTML / CSS</li>
                <li>Javascript</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>

                    <hr className={`w-full ${isActive ? 'opacity-25' : 'opacity-100'}`} />


          <div className="flex flex-col now lg:w-3/4">
            <h1 className="text-2xl font-bold md:text-3xl">Now</h1>
            <p className="font-medium text-xl tracking-tight mt-4">
              Focused on{" "}
              <span className="font-semibold italic">
                reading, learning and building
              </span>
              . Learning to work carefully and methodically. Mindful of my time
              so that I can produce quality work and feel productive.
            </p>

            <p className="font-medium text-xl tracking-tight mt-4">
              Learning by Building using tradiitional and latest Web technologies to further enhance my developer
              skills and deliver worthy content to my audience.
            </p>

            
          </div>

                  <hr className={`w-full ${isActive ? 'opacity-25' : 'opacity-100'}`} />


          <div className="stack flex flex-col">
            <h1 className="text-2xl font-bold md:text-3xl">My Tech Stack</h1>

            <ul className="flex flex-col gap-3 font-medium mt-5 text-xl">
              <li>HTML + CSS</li>
              <li>Bootstrap</li>
              <li>TailwindCSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>Zustand</li>
              <li>TypeScript</li>
              <li>Git / Github</li>
              <li>NextJS</li>
            </ul>
          </div>
    </section>
  )
}
