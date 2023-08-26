import React, { useEffect, useState } from 'react'
import divider from './assets/pattern-divider-desktop.svg'
import dice from './assets/icon-dice.svg'

const App = () => {
  const [advice, setAdvice] = useState(' ');
  const [id, setId] = useState(' ');
  const fetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then((r) => {
      r.json().then((t) => {
        const data = t.slip;
        setAdvice(data.advice);
        setId(data.id);
      });
    })
    .catch((e) => console.log(e))
  }
  useEffect(() => {
    fetchAdvice();
  }, [])

  return (
    <div className="container">
    <div className="advicebox">
      <h3 style={{color: "hsl(150, 100%, 66%)", marginBottom: "0px"}}>Advice #{id}</h3>
      <p style={{fontSize: "28px"}} className="advice-quote">
        {advice}
      </p>
      <img src={divider} alt="divider" style={{width: "100%"}} />
      <button className="dice" onClick={fetchAdvice}>
        <img src={dice} alt="dice" />
      </button>
    </div>
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/dashboard" target='_blank'>Sakalabhaktula Hanisha</a>.
    </div>
  </div>
  )
}

export default App
