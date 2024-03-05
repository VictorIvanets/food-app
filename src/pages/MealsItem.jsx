import {Link} from 'react-router-dom'


export function MealsItem (props) {

    const {strMeal, strMealThumb, idMeal
} = props


    return <div className ="meals__item">
    <div className="meals__item__poster">
    <Link to={`/itemmeal/${idMeal}`}>
    <img className="meals__item__img" src={strMealThumb} alt={idMeal} />
    </Link>
    </div>
    <div className="meals__item__type">{strMeal}</div>
    </div>

}