import {useNavigate} from 'react-router-dom'

export function Meals (props) {
    const navigate = useNavigate();
    const {
        idMeal,
        strMeal,
        strInstructions,
        strMealThumb,
        strCategory,
        strArea,
        strYoutube,
    } = props.itemmeals[0]


    const resept = props.itemmeals[0] 
    let linkVideo = `https://www.youtube.com/embed/${strYoutube.slice(32)}?si=zy1VLlrT4V_mfkmY`



//     console.log(Object.keys(resept).map(key =>key.includes('Ingredient')
//     && resept[key]
//      )
//     )
//   console.log(Object.keys(resept).includes('strIngredient19'))

    return  <>
    <div className='onemeal'>
    <h1 className="onemeal__name">{strMeal}</h1>

    <div className='onemeal__header'>

    <div className='onemeal__header__item'>
    <h3>Category:  <span className='orange'>{strCategory}</span></h3>
    <h3>Area: <span className='orange'>{strArea}</span></h3>
    <h3>Name: <span className='orange'>{strMeal}</span></h3>
    </div>

    <div className="onemeal__poster">
    <img className="onemeal__poster__img" src={strMealThumb} alt={idMeal} />
    </div>

    </div>

    <p className="onemeal__text"> <span className='bold'>Instructions:</span> {strInstructions}</p>


<table>
    <thead>
        <tr>
            <th className='bold taleft'>Ingredient</th>
            <th className='orange bold'>Measure</th>
        </tr>
    </thead>

    <tbody>
    {    
    Object.keys(resept).map(key => {
    if(key.includes('Ingredient') && resept[key])
    {
        console.log(resept)
        return (
           <tr key={key}>
            <td className='bold taleft'>{resept[key]}</td>
            <td className='orange bold taright'>{
                resept[`strMeasure${key.slice(13)}`]
                }</td>
           </tr> 
        )
    }
    return null
}


)}

    </tbody>
</table>

</div>

<div className='videobox'>

<iframe src={linkVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<h3>Name: {strMeal}</h3>
<h3>Area: {strArea}</h3>
<h3>Category:{strCategory}</h3>
<button className='btn' onClick={()=>navigate(-1)}>back</button>
<button className='btn' onClick={()=>navigate(+1)}>forw</button>
</div>

</>


}



/*
 * Мой вариант сделаный самостоятельно
import {useNavigate} from 'react-router-dom'

export function Meals (props) {
    const navigate = useNavigate();
    const {
        idMeal,
        strMeal,
        strInstructions,
        strMealThumb,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15,
        strMeasure16,
        strMeasure17,
        strMeasure18,
        strMeasure19,
        strMeasure20,
        strCategory,
        strArea,
        strYoutube,
    } = props.itemmeals[0]

let linkVideo = `https://www.youtube.com/embed/${strYoutube.slice(32)}?si=zy1VLlrT4V_mfkmY`

console.log(props.itemmeals[0])

    return  <div className='onemeal'>
    <h1 className="onemeal__name">{strMeal}</h1>

    <div className='onemeal__header'>

    <div className='onemeal__header__item'>
    <h3>Category:  <span className='orange'>{strCategory}</span></h3>
    <h3>Area: <span className='orange'>{strArea}</span></h3>
    <h3>Name: <span className='orange'>{strMeal}</span></h3>
    </div>

    <div className="onemeal__poster">
    <img className="onemeal__poster__img" src={strMealThumb} alt={idMeal} />
    </div>

 

    </div>


    <p className="onemeal__text"> <span className='bold'>Instructions:</span> {strInstructions}</p>
    <p className="onemeal__text bold">{strIngredient1}<span className='padleft orange'>{strMeasure1}</span></p>
    <p className="onemeal__text bold">{strIngredient2}<span className='padleft orange'>{strMeasure2}</span></p>
    <p className="onemeal__text bold">{strIngredient3}<span className='padleft orange'>{strMeasure3}</span></p>
    <p className="onemeal__text bold">{strIngredient4}<span className='padleft orange'>{strMeasure4}</span></p>
    <p className="onemeal__text bold">{strIngredient5}<span className='padleft orange'>{strMeasure5}</span></p>
    <p className="onemeal__text bold">{strIngredient6}<span className='padleft orange'>{strMeasure6}</span></p>
    <p className="onemeal__text bold">{strIngredient7}<span className='padleft orange'>{strMeasure7}</span></p>
    <p className="onemeal__text bold">{strIngredient8}<span className='padleft orange'>{strMeasure8}</span></p>
    <p className="onemeal__text bold">{strIngredient9}<span className='padleft orange'>{strMeasure9}</span></p>
    <p className="onemeal__text bold">{strIngredient10}<span className='padleft orange'>{strMeasure10}</span></p>
    <p className="onemeal__text bold">{strIngredient11}<span className='padleft orange'>{strMeasure11}</span></p>
    <p className="onemeal__text bold">{strIngredient12}<span className='padleft orange'>{strMeasure12}</span></p>
    <p className="onemeal__text bold">{strIngredient13}<span className='padleft orange'>{strMeasure13}</span></p>
    <p className="onemeal__text bold">{strIngredient14}<span className='padleft orange'>{strMeasure14}</span></p>
    <p className="onemeal__text bold">{strIngredient15}<span className='padleft orange'>{strMeasure15}</span></p>
    <p className="onemeal__text bold">{strIngredient16}<span className='padleft orange'>{strMeasure16}</span></p>
    <p className="onemeal__text bold">{strIngredient17}<span className='padleft orange'>{strMeasure17}</span></p>
    <p className="onemeal__text bold">{strIngredient18}<span className='padleft orange'>{strMeasure18}</span></p>
    <p className="onemeal__text bold">{strIngredient19}<span className='padleft orange'>{strMeasure19}</span></p>
    <p className="onemeal__text bold">{strIngredient20}<span className='padleft orange'>{strMeasure20}</span></p>

<div className='onemeal__videobox'>
<iframe width="560" height="315" src={linkVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<button className='btn' onClick={()=>navigate(-1)}>back</button>
<button className='btn' onClick={()=>navigate(+1)}>forw</button>
<h3>Name: {strMeal}</h3>
<h3>Area: {strArea}</h3>
<h3>Category:{strCategory}</h3>
</div>




}

 */