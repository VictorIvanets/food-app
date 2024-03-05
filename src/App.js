import React from 'react'
import {Header} from './component/header'
import {Footer} from './component/footer'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Home} from './pages/Home'
import {NotFound} from './component/notFound'
import {Category} from './pages/Category'
import {ItemMeals} from './pages/ItemMeals'


function App() {
  return <>
  <BrowserRouter basename='/food-app'>
    < Header />

<main className='App content'>


    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/category/:name' element={<Category/>}/>
        <Route path='/itemmeal/:mealid' element={<ItemMeals/>}/>
    </Routes>


</main>



    < Footer />
  </BrowserRouter>
  </>
  ;
}

export default App;
