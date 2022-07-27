import React, { useState } from 'react'
import menus from './data'
import './App.css'
import Categories from './Components/Categories'
import Menu from './Components/Menu'



const allCategorise = [ 'all',...new Set( menus.map(menu => menu.category))]

function App() {

  

  const [allMenus,setAllMenus] = useState(menus)
  const [categories , setCategorise]= useState(allCategorise)
 
  const filterMenus = (category) => {
    if(category ==='all'){
      setAllMenus(menus)
      return 
    }
    let filteredMenus = menus.filter(menu => menu.category === category)
    setAllMenus(filteredMenus)
  }

  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>Restaurant menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenus={filterMenus}/>
        <Menu allMenus={allMenus}/>
      </section>
    </main>
  )
}

export default App