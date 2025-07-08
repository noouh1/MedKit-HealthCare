import React from 'react'
import type{
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from '@fullcalendar/multimonth'
import { Box } from '@mui/material'

interface DemoAppState {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}

export default class BigCalendar extends React.Component<DemoAppState> {

  state: DemoAppState = {
    weekendsVisible: true,
    currentEvents: []
  }
  

  render() {
    return (
      <Box  sx={{
            borderRadius: 4,
            py: { xs: 2, md: 4 },
            px: { xs: 1, sm: 2, md: 4 },
            background: '#fff',
            boxShadow: '0 2px 16px rgba(30,108,114,0.06)',
            minWidth: { xs: '100vw', sm: '90vw', md: 1200 },
            alignItems: 'center',
            mb: { xs: 2, md: 4 },
            
          }}>
        <Box sx={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,multiMonthPlugin]}

            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}

            eventColor = '#1e6c72'
            initialView='dayGridMonth'
            multiMonthMaxColumns = {1} 
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </Box>
      </Box>
    )
  }



  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  )
}

