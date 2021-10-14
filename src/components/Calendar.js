import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

function Calendar(props) {
  const [startDate, setStartDate] = useState(new Date())

  //d輸入的日期
  function birthday() {
    const toDay = new Date()
    //今天-生日;每1000毫秒=1秒；60秒=1分鐘；60分鐘=1小時；24小時=1天；365天=1年
    //console.log((toDay - d) / 1000 / 60 / 60 / 24 / 365)
    const birthday = (toDay - startDate) / 1000 / 60 / 60 / 24 / 365
    if (birthday > 18) {
      alert('恭喜你成年了~')
    }
  }
  return (
    <div>
      <p>
        判斷是否超過18歲 <br />
        <button onClick={() => birthday()}>計算</button>
      </p>
      <DatePicker selected={startDate} onChange={(d) => setStartDate(d)} />
    </div>
  )
}

export default Calendar
