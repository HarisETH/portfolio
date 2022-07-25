import React from 'react'

export default function Nav({isActive, scroll}) {
  return (
    
        <nav
        id="navbar"
        className={` w-full transition-all py-2 sticky top-0 z-50 flex items-center justify-center ${scroll ? "translate-y-0 " : "-translate-y-full"}`}
      >
        <h1 className={`font-monu font-bold tracking-wider text-2xl md:text-3xl ${isActive? 'text-white' : 'text-black '}`}>HK</h1>
      </nav>
    
  )
}
