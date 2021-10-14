import React, { useState } from 'react'

function Summary(props) {
  const { productCount, total, shipping } = props
  const { delFee, setdelFee } = props
  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col col-style">共 {productCount} 項目</div>
        </div>
        <section id="selectedOption">
          <p>運費</p>
          <select
            value={delFee}
            onChange={(e) => {
              setdelFee(e.target.value)
            }}
          >
            <option value="" selected>
              請選擇
            </option>
            <option value="200">郵局 $200</option>
            <option value="250">快遞 $250</option>
          </select>
        </section>
        <div className="row row-style">
          <div className="col">總價</div>
          <div className="col text-right">${total + +delFee}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  )
}

export default Summary
