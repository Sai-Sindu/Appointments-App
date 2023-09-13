// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'
import AppointmentItem from '../AppointmentItem'

const initialAppointmentsList = []

class Appointments extends Component {
  state = {
    appointmentsList: initialAppointmentsList,
    title: '',
    date: '',
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    if (title !== '' && date !== '') {
      const newAppointment = {
        id: uuidv4(),
        title,
        date,
        isStared: false,
      }

      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  toggleIsStared = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStared: !eachAppointment.isStared}
        }
        return eachAppointment
      }),
    }))
  }

  StaredAppointments = () => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.filter(
        eachAppointment => eachAppointment.isStared === true,
      ),
    }))
  }

  render() {
    const {title, date, appointmentsList} = this.state

    return (
      <div className="bg-container">
        <div className="container-card">
          <h1 className="title-heading">Add Appointment</h1>
          <div className="form-container">
            <form className="form-card" onSubmit={this.onAddAppointment}>
              <label htmlFor="input" className="label-text">
                TITLE
              </label>
              <input
                type="text"
                id="input"
                className="input-card"
                placeholder="Title"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="input-date" className="label-text">
                Date
              </label>
              <input
                type="date"
                id="input-date"
                className="input-card"
                placeholder="dd/mm/yyyy"
                value={date}
                onChange={this.onChangeDate}
              />
              <button className="submit-button" type="submit">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-image"
            />
          </div>
          <hr className="separator" />
          <div className="appointments-header-card">
            <h1 className="appointments-title">Appointments </h1>
            <button
              type="button"
              className="stared-button"
              onClick={this.StaredAppointments}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-container-list">
            {appointmentsList.map(eachAppointment => (
              <AppointmentItem
                appointmentDetails={eachAppointment}
                key={eachAppointment.id}
                toggleIsStared={this.toggleIsStared}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
