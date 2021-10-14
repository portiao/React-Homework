import React, { useState } from 'react'
import '../menu.css'

function Menu2(props) {
  const [selectValue, setSelectValue] = useState('')
//   const clickValue = (e) =>console.log(e)
  const clickValue = (e) => setSelectValue(e.target.textContent)

  return (
    <div className="nav">
      <ul>
        <li
          onClick={(e) => {
            clickValue(e)
          }}
        >
          <a className={selectValue == '首頁' ? 'active' : ' '}>首頁</a>
        </li>
        <li
          onClick={(e) => {
            clickValue(e)
          }}
        >
           <a className={selectValue == '關於我們' ? 'active' : ' '}>關於我們</a>
        </li>
        <li
          onClick={(e) => {
            clickValue(e)
          }}
        >
          <a className={selectValue == '產品' ? 'active' : ' '}>產品</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu2
