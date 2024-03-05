import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {getMealById} from '../api'
import {Preloader} from '../component/preloader'
import {Meals} from './Meal'



export function ItemMeals(){
    const {mealid} = useParams()
    const [itemmeals, setMaels] = useState([])

    useEffect(()=>{
        getMealById(mealid).then(data => {
            setMaels(data.meals)

        })
    }, [mealid])
    
    return  <>
        {!itemmeals.length ? <Preloader/> : <Meals itemmeals = {itemmeals}/>}
            </>
    
    }