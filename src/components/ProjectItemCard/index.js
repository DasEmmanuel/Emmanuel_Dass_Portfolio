import './index.css'

const ProjectItemCard = props => {
  const {projectDetails} = props
  const {name, category, projectUrl, imageUrl} = projectDetails

  return (
    <li className="projectCard">
      <img src={imageUrl} alt="project Logo" className="projectImg" />
      <p>{name}</p>
      <p>{category}</p>
      <p>{projectUrl}</p>
    </li>
  )
}

export default ProjectItemCard
