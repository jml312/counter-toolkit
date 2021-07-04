import React, {useState, useEffect} from 'react'
import { add, subtract, multiply, divide, resetToZero,resetToOne, resetToTwo, square, mod, flip } from "./counterSlice";
import {useSelector, useDispatch } from 'react-redux';

function Counter() {
  const [countChanged, setCountChanged] = useState(false);
  const [text, setText] = useState("")
  const [addBy, setAddBy] = useState(0)
  const [subBy, setSubBy] = useState(0)
  const [multBy, setMultBy] = useState(0)
  const [divBy, setDivBy] = useState(0)
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);

  useEffect(() => {
    if (countChanged) {
    setText("Count Changed")
    setTimeout(() => {
      setText("")
    }, 1000);
  }
  setCountChanged(true)
  }, [count]);


  //add commas to numbers
  const addCommas = (n) => {
    if (!n.toString().includes(".")) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    return n
  }

  return (
    <div>
      <h1>Count: {addCommas(count)}</h1>
      <button onClick={() => dispatch(add())}>+1</button>
      <button onClick={() => dispatch(subtract())}>-1</button>
      <button onClick={() => dispatch(multiply())}>x2</button>
      <button onClick={() => dispatch(divide())}>/2</button>      
      <button onClick={() => dispatch(square())}>^2</button>
      <button onClick={() => dispatch(resetToZero())}>0</button>
      <button onClick={() => dispatch(resetToOne())}>1</button>
      <button onClick={() => dispatch(resetToTwo())}>2</button>
      <button onClick={() => dispatch(flip())}>Flip Sign</button>
      <button onClick={() => dispatch(mod())}>%2</button>
      <br />
      <input type="number" min="0" value={addBy} placeholder="+/- by" onChange={({target: {value}}) => setAddBy(value)}/>
      <input type="submit" value={`+ ${addCommas(addBy)}`} onClick={() => dispatch(add(parseInt(addBy) || 0))}/>
      <br />
      <input type="number" min="0" value={subBy} placeholder="+/- by" onChange={({target: {value}}) => setSubBy(value)}/>
      <input type="submit" value={`- ${addCommas(subBy)}`} onClick={() => dispatch(subtract(parseInt(subBy) || 0))}/>  
      <br />
      <input type="number" min="0" value={multBy} placeholder="+/- by" onChange={({target: {value}}) => setMultBy(value)}/>
      <input type="submit" value={`* ${addCommas(multBy)}`} onClick={() => dispatch(multiply(parseInt(multBy) || 0))}/>  
      <br />
      <input type="number" min="0" value={divBy} placeholder="+/- by" onChange={({target: {value}}) => setDivBy(value)}/>
      <input type="submit" value={`/ ${addCommas(divBy)}`} onClick={() => dispatch(divide(parseInt(divBy) || 0))}/>
      <br/>
    </div>
  )
}

export default Counter
