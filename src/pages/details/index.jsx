import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context"




export default function Details() {

    const { id } = useParams()

    const { recipeDetailData, setRecipeDetailData, handleAddToFav, favoritesList } = useContext(GlobalContext)



    // getRecipeDetails function
    useEffect(() => {
        async function getRecipeDetails() {
            try {
                const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
                const data = await response.json()
                if (data?.data) {
                    setRecipeDetailData(data?.data)
                }
            } catch (error) {
                throw new Error(error)
            }
        }
        getRecipeDetails({})
    }, [id,setRecipeDetailData])


    return (
        <div className="container mx-auto py-10  grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex row-start-2 lg:row-start-auto">
                <div className="h-96 overflow-hidden rounded-xl group">
                    <img
                        src={recipeDetailData?.recipe?.image_url} alt="recipe-item"
                        className=" h-full object-cover group-hover:scale-105 duration-300"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className='text-5xl text-cyan-700 font-medium hover:text-black'>
                    {recipeDetailData?.recipe?.publisher}
                </span>
                <h3 className='text-2xl font-bold truncate text-black'>
                    {recipeDetailData?.recipe?.title}
                </h3>
                <div>
                    <button onClick={() => handleAddToFav(recipeDetailData?.recipe)}
                        className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white hover:bg-cyan-800">
                        {favoritesList && favoritesList.length > 0 &&
                            favoritesList.findIndex
                                (item => item.id === recipeDetailData?.recipe?.id
                                ) !== -1
                            ? "Remove From Favorites"
                            : 'Add to Favorites'
                        }

                    </button>
                </div>
                <div>
                    <span className="text-2xl font-semibold text-black">Ingredients:</span>
                    <ul className="flex flex-col gap-3">
                        {
                            recipeDetailData?.recipe?.ingredients.map(ingredient => (
                                <li>
                                    <span className="text-2xl font-semibold text-black">{ingredient.quantity} {ingredient.unit}</span>
                                    <span className="text-2xl font-semibold text-black">{ingredient.description}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>



        </div>
    )
}