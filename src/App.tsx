import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import {hourSelector, minuteState} from './atom'


function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours =useRecoilValue(hourSelector)
  const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) =>{
    setMinutes(+event.currentTarget.value); //문자를 숫자로 바꿔줌. +"1" => 1
  }
  return (
   <div>
     <input value={minutes} onChange={onMinutesChange} type="number" placeholder='Minutes'/>
     <input value={hours} type="number" placeholder='Hours'/>

   </div>
  );
}

export default App;
