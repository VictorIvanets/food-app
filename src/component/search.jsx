import {useState} from 'react'

export function Search({cb = Function.prototype}) 
{

const [value, setValue] = useState('')


const handlKey = (e) => {
    if (e.key === 'Enter'){
        handleSubmit()
    }}

    
const handleSubmit = () => { cb(value) }





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
        >go!</button>
    </div>
</div>



}