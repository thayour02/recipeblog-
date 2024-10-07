import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../context'


export default function Navbar() {
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);

    // searchParam ui
    return (
        <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0" >
            <h2 className='text-2xl font-semibold'>
                <NavLink to={'/'} className="text-black hover:text-cyan-700 duration-300 cursor-pointer">Food Recipe</NavLink>
            </h2>

            <form onSubmit={handleSubmit}>
                <input type="text" 
                 placeholder='Enter Items...'
                 value={searchParam}
                 onChange={(e)=> setSearchParam(e.target.value)}
                 className='bg-white p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200' />
            </form>
            <ul className='flex gap-5 '>
                <li>
                    <NavLink to={'/'} className="text-black hover:text-cyan-700 duration-300 text-xl font-semibold cursor-pointer">Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favorites'} className="text-black hover:text-cyan-700 duration-300 text-xl font-semibold cursor-pointer">Favorites</NavLink>
                </li>
            </ul>
        </nav>
    )
}