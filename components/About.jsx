import React from 'react'

export default function About() {
  return (
    <div>
        <div className="about flex flex-col gap-3 lg:w-3/4 font-medium">
            <h1 className="font-bold text-2xl md:text-3xl">About</h1>
            <p className="text-xl mt-2">
              I'm a Undergraduate student in Physics who is curious to explore
              web technologies and also build Blazing Websites. Also curious to
              explore the Web3 world . Also Interested in Crypto, De-Fi.{" "}
            </p>
            <p className="text-xl mt-5">
              I live in Chennai, IN . Creating educational content in{" "}
              <a
                className="text-blue-500 hover:text-blue-700 "
                href="https://instagram.com/four39_codes"
              >
                Instagram
              </a>{" "}
              and in Twitter at{" "}
              <a
                className="text-blue-500 hover:text-blue-700 "
                href="https://www.twitter.com/Haris_Eth"
              >
                @Haris_ETH
              </a>{" "}
              and{" "}
              <a
                className="text-blue-500 hover:text-blue-700 "
                href="https://www.twitter.com/four39_codes"
              >
                @Four39_Codes
              </a>
              .
            </p>

            <div className="links flex flex-wrap mt-4 md:space-x-8 ">
              <a
                className="text-xl mr-3 md:mr-0 mb-2 sm:mb-0 hover:text-blue-600"
                href="https://www.github.com/HarisETH"
              >
                Github
              </a>

              <a
                className="text-xl mr-3 md:mr-0 mb-2 sm:mb-0  hover:text-blue-600"
                href="https://www.fueler.io/haris_one"
              >
                Fueler
              </a>

              <a
                className="text-xl mr-3 md:mr-0 mb-2 sm:mb-0  hover:text-blue-600"
                href="https://www.twitter.com/Haris_ETH"
              >
                Twitter
              </a>
              <a
                className="text-xl mr-3 md:mr-0 mb-2 sm:mb-0 hover:text-blue-600"
                href="https://peerlist.io/haris"
              >
                PeerList
              </a>
            </div>
          </div>
    </div>
  )
}
