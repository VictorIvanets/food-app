import {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {Preloader} from '../component/preloader'
import {
    getAllCategories, 
} from '../api'
import {CategoryList} from './CategoryList'
import {Search} from '../component/search'


export function Home(){

const [catalog, setCatalog] = useState([])
const [filterCatalog, setFilterCatalog] = useState([])
let navigate = useNavigate()
let {search} = useLocation()




const hendelSearch = (str)=>{
setFilterCatalog(
    catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
)
navigate(
search = `?search=${str}`)
} 

useEffect(()=>{
    getAllCategories().then(data => {
        setCatalog(data.categories)
        setFilterCatalog(search 
        ? data.categories.filter((item)=>item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()))
        :
        data.categories)
    })
}, [search])




return <>
< Search cb={hendelSearch}/>

{!catalog.length ? <Preloader/> : <CategoryList catalog={filterCatalog}/>}

</>

}