import {useState} from 'react'

export function SearchMaels(props) 
{

const {
    hendelSearch = Function.prototype,
} = props


const [value, setValue] = useState('')


const handlKey = (e) => {
    if (e.key === 'Enter'){
        handleSubmit()
    }}

    
function handleSubmit () {
    hendelSearch(value)
    setValue('')
}


return <div className='search'>
    <div className="search__box">
        <input 
        className='search__input'
        type="search" 
        id='search-field'
        placeholder='search'
        onKeyDown={handlKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        />
        <button 
        onClick={handleSubmit}
        className='search__btn'
        >go!/reset</button>

    </div>
</div>



}