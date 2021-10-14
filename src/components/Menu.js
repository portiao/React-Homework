import React, { useState } from 'react'
import '../menu.css'

function Menu(props) {
  //陣列0的位置代表妳首頁的顏色,1是關於我們,2是產品
  const [original, setOriginal] = useState([false, false, false])
  const originalColor = (arr) => setOriginal(arr)

  return (
    <div className="nav">
      <ul>
        <li
          onClick={() => {
            originalColor([true, false, false])
          }}
        >
          <a style={{ backgroundColor: original[0] ? 'red' : 'black' }}>首頁</a>
        </li>
        <li
          onClick={() => {
            originalColor([false, true, false])
          }}
        >
          <a style={{ backgroundColor: original[1] ? 'red' : 'black' }}>
            關於我們
          </a>
        </li>
        <li
          onClick={() => {
            originalColor([false, false, true])
          }}
        >
          <a style={{ backgroundColor: original[2] ? 'red' : 'black' }}>產品</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
