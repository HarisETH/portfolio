import React from 'react'

export default function Connect() {
  return (
    <div>
        <div className="connect flex flex-col">
            <h1 className="text-2xl font-bold">Connect</h1>

            <p className="text-xl font-medium mt-5">
              You can contact me for projects via{" "}
              <a target="_blank" rel='noreferrer noopener'
                href="mailto:hariskumar.eth@gmail.com"
                className={`text-blue-500`}
              >
                hariskumar.eth@gmail.com
              </a>
            </p>

            <p className="text-xl font-medium mt-3">
              Connect with me on
              <a target="_blank" rel='noreferrer noopener'
                href="https://www.instagram.com/four39_codes"
                className="text-blue-500"
              >
                {" "}
                Instagram
              </a>{" "}
              and
              <a target="_blank" rel='noreferrer noopener'
                href="https://www.twitter.com/haris_eth"
                className="text-blue-500"
              >
                {" "}
                Twitter
              </a>
            </p>

            <div className="flex gap-4 md:gap-8 text-xl font-medium   mt-6 ml-px">
              <a
                href="https://links.haris.one"
                target="_blank" rel='noreferrer noopener'
                className="hover:text-blue-600 flex items-center text-xl italic"
              >
                Links
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a target="_blank" rel='noreferrer noopener'
                href="https://www.github.com/HarisETH"
                className="hover:text-blue-600 flex items-center text-xl italic"
              >
                Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
    </div>
  )
}
