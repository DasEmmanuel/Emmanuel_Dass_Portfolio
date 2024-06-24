import './index.css'

const SkillItem = props => {
  const {skillDetails} = props
  const {id, skillName, domain, domainStrength} = skillDetails

  return (
    <li className="SkillItem">
      <div className="domainDetails">
        <p>{`${domain} - ${skillName}`}</p>
        <p>{domainStrength}</p>
      </div>
      <div className="percentageBar" id={`domain_${id}`}>
        .
      </div>
    </li>
  )
}

export default SkillItem
