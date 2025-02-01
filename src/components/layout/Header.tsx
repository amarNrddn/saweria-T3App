import Link from 'next/link'
import React from 'react'

const Header = () => {
   return (
      <header className='border-border border-b-2 flex h-16 items-center justify-between bg-secondary px-4 md:h-20 md:px-8'>
         <Link
            href={"/"}
            className='text-2xl font-bold text-primary hover:cursor-pointer md:text-3xl'
         >
            MarzkyyRia
         </Link>
      </header>
   )
}

export default Header