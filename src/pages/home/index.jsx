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
                    <p style={{marginLeft:"300px"}} className="lg:text-4xl text-center font-bold">Recipe Not Found Please Search Something Else</p>
                </div>
            }
    </div>
}