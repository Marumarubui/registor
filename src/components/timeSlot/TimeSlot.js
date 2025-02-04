import './timeSlot.css'
import React, { useEffect, useState } from 'react'
import { avalibleTime, data } from '../../service/data';
import ApplierList from '../applierList/ApplierList';

export default function({ selectedDate, timeSlot, setTimeSlot }) {
  const [selectedTime, setSelectedTime] = useState()

  const onChange = (event) => {
    setSelectedTime(event.target.value)
  }

  useEffect(()=>{
    
  })

  if (avalibleTime) {
    let today = avalibleTime.filter((slot) => slot.date.toDateString() === selectedDate.toDateString());

    timeSlot = today[0]?.time?.map((slot, index) => {
      return (
        <>
          <input id={slot+index} type="radio" name="timeSlot" className="timeSlot" value={slot+selectedDate} checked={selectedTime===slot+selectedDate} onChange={onChange}/>
          <label htmlFor={slot+index}>{slot}</label>
        </>
      );
    });
  } else {
    timeSlot = "empty classes"
  }

	return (
    <>
      <div className="timeSlotList" align="left">{timeSlot}</div>
      <ol><ApplierList selectedDate={selectedDate} selectedTime={selectedTime}/></ol>
    </>
  )
}
