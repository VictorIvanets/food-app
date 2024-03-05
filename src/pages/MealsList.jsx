import {MealsItem} from './MealsItem'
import {useState} from 'react'
import {SearchMaels} from '../component/searchMeals'
import {useLocation, useNavigate} from 'react-router-dom'


export function MealsList (props) {


    const [filterCatalog, setFilterCatalog] = useState([])
    const {meals, name} = props
    let {search} = useLocation()
    let navigate = useNavigate()



const hendelSearch = (str)=>{
  setFilterCatalog(
    meals.filter(item => item.strMeal.toLowerCase().includes(str.toLowerCase()))
  )
  navigate(
    search = `?search=${str}`)
  }

  // console.log(meals)
  // console.log(filterCatalog)

// const arrmeals = (meals.map(item=>(Object.values(item))))
// const valueMils = arrmeals.map(i=>(i[0]))
// const itemMealsLower = valueMils.map(b=>b.toLowerCase())
// const itemValMils = itemMealsLower.filter(a=>a.includes(valueSear.toLowerCase()))


    return <div>
    <SearchMaels hendelSearch={hendelSearch}/>

    <h1>{name}</h1>
    <div className="meals">

    {
    filterCatalog.length === 0 
    ? 
    meals.map(el => (<MealsItem key={el.idMeal} {...el}/>))  
    :
    filterCatalog.map(el => (<MealsItem key={el.idMeal} {...el}/>))
    }



    </div>

    </div>
}



// export function CategoryList ({catalog = []}) {



        
//     }
//     console.log(valueSear)

//     return <div className="catalog">
//          <SearchMaels valueSearch={valueSearch}/>
//     { catalog.map(el => (
//              <CategoryItem key={el.idCategory} {...el}/>
//     ))
       

//     }
// {
//   filterCatalog ? filterCatalog.map(el => (<MealsItem key={el.idMeal} {...el}/>)):
//   meals.map(el => (<MealsItem key={el.idMeal} {...el}/>))   
//   }


//     </div>

// }









// export function MealsList (props) {




//   const {meals, name} = props
//     // console.log(meals)
//     // console.log(name)
  
//       return <div>
//       <h1>{name}</h1>
//       <div className="meals">
//       {meals.map(el => (
//                <MealsItem key={el.idMeal} {...el}/>
//       ))
         
//       }
//       </div>
  
//       </div>
//   }
  