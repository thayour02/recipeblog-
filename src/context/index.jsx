import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


// GlobalContext page
export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    // searchParam GlobalContext
const [searchParam, setSearchParam] =useState("")

// Loading data GlobalContext
const [loading, setLoading]= useState(false)

// recipelist GlobalContext
const [recipe, setRecipe] = useState([])
//recipe Details global context
const [recipeDetailData, setRecipeDetailData] = useState(null)
//favorite page globalContext
const [favoritesList, setFavoritesList] = useState([])

//to navigate to homePage from any page
const navigate = useNavigate()

// search function and fetch data
async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
        
        const data = await res.json()

        if(data?.data?.recipes){
            setRecipe(data?.data?.recipes)
            setLoading(false)
            setSearchParam("")
            navigate('/')
        }

    } catch (error) {
        setLoading(false)
        throw new Error(error)
    }
}


// add to favoritesList function
function handleAddToFav(getCurrentItem){
        let cpyFavList = [...favoritesList]
        const index = cpyFavList.findIndex(item => item.id === getCurrentItem.id)

        if(index === -1){
            cpyFavList.push(getCurrentItem)
        }else{
            cpyFavList.splice(index)
        }

        setFavoritesList(cpyFavList)
}

// GlobalContext
    return <GlobalContext.Provider 
    value={{
        searchParam,
        loading,
        recipe,
        setSearchParam,
        handleSubmit,
        recipeDetailData,
        setRecipeDetailData,
        handleAddToFav,
        favoritesList
        }}>{children}</GlobalContext.Provider>
}