import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function Calender() {
  return (
    <div className='container mx-auto'>
      <FullCalendar
        plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              height= '500px'
        events={[
          { title: "event 1", date: "2019-04-01" },
          { title: "event 2", date: "2019-04-02" },
        ]}
      />
    </div>
  );
}

export default Calender