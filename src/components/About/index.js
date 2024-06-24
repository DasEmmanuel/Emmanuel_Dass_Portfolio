import {Chrono} from 'react-chrono'
import {v4} from 'uuid'
import EducationItem from '../EducationItem'

import './index.css'

const educationList = [
  {
    id: v4(),
    institute: 'NxtWave',
    course: `Fellow at NxtWave’s CCBP 4.0 Intensive`,
    startDate: `September 2023`,
    endDate: `Present`,
  },
  {
    id: v4(),
    institute: 'Sreenidhi Institute of Science and Technology',
    course: `B.Tech in Computer Science and Engineering`,
    startDate: `August 2019`,
    endDate: `July 2023`,
  },
  {
    id: v4(),
    institute: 'Narayana Junior College',
    course: `Intermediate`,
    startDate: `June 2017`,
    endDate: `June 2019`,
  },
  {
    id: v4(),
    institute: `St. Paul's High School`,
    course: `10th Standard`,
    startDate: `June 2005`,
    endDate: `May 2017`,
  },
]

const About = () => (
  <div className="about_BgCtn">
    <div className="top_Ctn">
      <p className="introText">
        {`I'm a B.Tech graduate from Sreenidhi Institute of Science and Technology. 
          Currently being trained on Full stack Web development with a specialization in 4.0 technologies in CCBP at NxtWave. Passionate for solving coding challenges and hands-on projects.
          With Industry’s first ever IRC 4.0 certification getting ready to take on new challenges in the tech world. Passionate for learning and implementing new Technologies by building my career in IT Companies.`}
      </p>
    </div>
    <div className="educationCtn">
      <div className="chrono-container">
        <h1>Education</h1>
        <Chrono mode="VERTICAL" className="chronoItem">
          {educationList.map(eachItem => (
            <EducationItem key={eachItem.id} educationDetails={eachItem} />
          ))}
        </Chrono>
      </div>
    </div>
  </div>
)

export default About
