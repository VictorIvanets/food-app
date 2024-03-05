import{useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {
    filterByCategories
} from '../api'
import {Preloader} from '../component/preloader'
import {MealsList} from './MealsList'






export function Category(){
    // console.log(name)
    const {name} = useParams()
    const [meals, setCatalog] = useState([])
    useEffect(()=>{
        filterByCategories(name).then(data => {
            setCatalog(data.meals)
        })
    }, [name])
    

    return <>
{!meals.length ? <Preloader/> : <MealsList meals={meals} name={name}/>

}    



</>
    
    }