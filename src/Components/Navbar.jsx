import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
 <header className='header'>
<NavLink to='/' className='w-40 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md'>
    <p className='text-red-600'>Dinesh_Babu</p>
</NavLink>
<nav className='flex text-lg gap-7 font-medium'>
<NavLink to='/about' className={({isActive}) => isActive ? 'text-red-600' : 'text-black'}>About</NavLink>
<NavLink to='/projects' className={({isActive}) => isActive ? 'text-red-600' : 'text-black'}>Projects</NavLink>
</nav>
 </header>
  )
}

export default Navbar
