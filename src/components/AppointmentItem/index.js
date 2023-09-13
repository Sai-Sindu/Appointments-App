// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStared} = props
  const {title, date, isStared, id} = appointmentDetails

  const onClickStar = () => {
    toggleIsStared(id)
  }

  const starImg = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-card">
      <div className="title-star-card">
        <p className="title">{title}</p>
        <button
          className="star-button"
          type="button"
          data-testid="star"
          onClick={onClickStar}
        >
          <img src={starImg} alt="star" className="star-img" />
        </button>
      </div>
      <p className="date">
        Date: {format(new Date(date), 'dd MMMM yyyy, EEEE')}
      </p>
    </li>
  )
}

export default AppointmentItem
