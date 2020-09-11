import React, { useState } from 'react'
let convert = require('color-convert');

function Converter() {
  const [form, setForm] = useState('');
  const [color, setColor] = useState('');
  // let color="";
  const handleConverter = evt => {
    if (evt.target.value.length == 7) {
      if (convert.hex.rgb(evt.target.value)[0] == 0) {
        setForm(`Error`);
      } else if (evt.target.value.split("")[0] !== "#") {
        setForm(`Error`);
      }
      else {
        setColor(evt.target.value);
        let mas = convert.hex.rgb(evt.target.value);
        setForm(`rgb(${mas[0]}, ${mas[1]}, ${mas[2]})`);
      }

    }
  }
  const handleSubmit = evt => {
    evt.preventDefault();
  }
  const style = { backgroundColor: color };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="wrap">
        <input className="inp" id="name" name="name" onChange={handleConverter} />
        <label className="label" htmlFor="name" style={style}>{form}</label>
      </div>
    </form>);
}

export default Converter;
