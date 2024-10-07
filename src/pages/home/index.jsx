import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../component/recipe-list/recipe"


export default function Home(){
    const {recipe, loading} = useContext(GlobalContext)

    if(loading) return <div className="text-center text-4xl font-extrabold">Loading Recipe... Please wait</div>

    return <div className="py-8 container mx-auto flex flex-wrap justify">
            {
                recipe && recipe.length > 0 ? 
                    recipe.map(Item => <RecipeItem Item={Item}/>)
                :<div>
                    <p  className="lg:text-5xl  md:px-40 px-10 mt-20 font-bold">Please Search Your Recipe</p>
                </div>
            }
    </div>
}