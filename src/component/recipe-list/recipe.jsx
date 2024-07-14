import { Link } from "react-router-dom"

export default function RecipeItem({ Item }) {


    return <div className="flex flex-col w-80 ms-10  cursor-pointer overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 border-white rounded-2xl ">
        <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
            <img src={Item?.image_url} alt="recipe item" className="block w-full" />
        </div>
        <div>
            <span className="text-5m text-cyan-700 font-medium hover:text-black">{Item?.publisher}</span>
            <h3 className="text-2xl font-bold truncate text-black">{Item?.title}</h3>
            <Link className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:bg-cyan-800" to={`/recipe-item/${Item?.id}`}> Recipe Details</Link>
        </div>
    </div>
}