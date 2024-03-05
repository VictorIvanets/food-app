import {CategoryItem} from './CategoryItem'



export function CategoryList ({catalog = []}) {


    

    return <div className="catalog">
    { catalog.map(el => (
             <CategoryItem key={el.idCategory} {...el}/>
    ))
       

    }



    </div>

}