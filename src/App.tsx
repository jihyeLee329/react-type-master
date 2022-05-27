import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import './App.css';
import {hourSelector, minuteState} from './atom'


function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector)  //selector로 생성된 atom 일경우 1번째는 get함수, 2번째는 set 함수 
  const onMinutesChange = (event:React.FormEvent<HTMLInputElement>) =>{
    setMinutes(+event.currentTarget.value); //문자를 숫자로 바꿔줌. +"1" => 1
  }

  const onHoursChange = (event:React.FormEvent<HTMLInputElement>)=>{
    setHours(+event.currentTarget.value)
  }
  return (
   <div>
     <input value={minutes} onChange={onMinutesChange} type="number" placeholder='Minutes'/>
     <input value={hours} onChange={onHoursChange} type="number" placeholder='Hours'/>

   </div>
  );
}

export default App;
