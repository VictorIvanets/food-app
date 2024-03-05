import {Link} from 'react-router-dom'


export function CategoryItem (props) {

    const {idCategory, strCategoryThumb, strCategory} = props



    
    return <div className ="catalog__item">
    
 
    <div className="catalog__item__poster">
    <Link to={`/category/${strCategory}`}>
    <img className="catalog__item__img" src={strCategoryThumb} alt={idCategory} />
    </Link>
    </div>



    <div className="catalog__item__type">{strCategory}</div>
    {/* <div className="catalog__item__title">{strCategoryDescription}</div> */}

    </div>

}