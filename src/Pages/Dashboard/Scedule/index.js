import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { AiFillHome } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';


function Scedule() {

  const { state } = useLocation();
  
  return (
    <div className='container mx-auto'>
      <div className="flex justify-start w-full h-10 my-10 bg-lightindego items-center ">
        <h1 className="text-slate-300 font-medium  text-lg flex items-center px-5">
          {" "}
          <AiFillHome className="text-2xl mr-2" /> / {state}{" "}
        </h1>
      </div>

<FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      
        events={[
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' }
        ]}
      />

    </div>
    
  )
  
}



export default Scedule