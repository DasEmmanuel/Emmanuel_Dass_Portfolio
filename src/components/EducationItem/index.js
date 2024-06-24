import './index.css'

const EducationItem = props => {
  const {educationDetails} = props
  const {institute, course, startDate, endDate} = educationDetails

  return (
    <ul className="educationDetailsList">
      <li>
        <p>{institute}</p>
      </li>
      <li>
        <p>{`${startDate} - ${endDate}`}</p>
      </li>
      <li>
        <p>{course}</p>
      </li>
    </ul>
  )
}

export default EducationItem
