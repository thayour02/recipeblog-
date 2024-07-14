import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../component/recipe-list/recipe"

export default function Fav(){

        const {favoritesList} = useContext(GlobalContext)


    return <div className="py-8 container mx-auto flex flex-wrap justify">
            {
        favoritesList&& favoritesList.length > 0 ? 
                    favoritesList.map(Item => <RecipeItem Item={Item}/>)
                :<div>
                    <p style={{marginLeft:"300px"}} className="lg:text-4xl text-center font-bold">Nothing in Favorites....Add your recipe to display</p>
                </div>
            }
    </div>
}