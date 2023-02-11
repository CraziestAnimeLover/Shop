import React from 'react'

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
      <nav className='navbar'>
  <h1 className='btn-group__item'>Shop</h1>
    <div className='btn-group'>
        {
            menuList.map((curElem)=>{
                return <button className='btn-group__item' onClick={()=>filterItem(curElem)}>{curElem}</button>
            })
        }
      </div>
      </nav>
    </>
  )
}

export default Navbar
