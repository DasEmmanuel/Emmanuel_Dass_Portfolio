import {Component} from 'react'
import {v4} from 'uuid'
import TabItem from '../TabItem'
import ProjectItemCard from '../ProjectItemCard'

import './index.css'

const initialProjectsList = [
  {
    projectId: v4(),
    name: 'Nxt Trendz - An Ecommerce Website',
    category: 'REACT',
    imageUrl:
      'https://res.cloudinary.com/doki9ptsh/image/upload/c_fill,w_267,h_197/v1718991594/nxt-treands_gc5jso.png',
    projectUrl: 'https://dasnxttreands.ccbp.tech/',
  },
  {
    projectId: v4(),
    name: 'Dev Blog',
    category: 'REACT',
    imageUrl:
      'https://res.cloudinary.com/doki9ptsh/image/upload/c_fill,w_267,h_197/v1719065254/information-articles-blogging-device-screen_q0g1ek.jpg',
    projectUrl: 'https://dasdevblog.ccbp.tech/',
  },
  {
    projectId: v4(),
    name: 'Jobby App',
    category: 'REACT',
    imageUrl:
      'https://res.cloudinary.com/doki9ptsh/image/upload/c_fill,w_267,h_197/v1719224212/jobby_app_z7nnhh.png',
    projectUrl: 'https://dasjobby.ccbp.tech/',
  },
  {
    projectId: v4(),
    name: 'Trip Planner',
    category: 'STATIC',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/tourism-website-img.png',
    projectUrl: 'https://dasemmanuel15.ccbp.tech/',
  },
  {
    projectId: v4(),
    name: 'Food Munch',
    category: 'RESPONSIVE',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/food-munch-img.png',
    projectUrl: 'https://foodmunchwcu.ccbp.tech/',
  },
  {
    projectId: v4(),
    name: 'Task Trove',
    category: 'DYNAMIC',
    imageUrl:
      'https://res.cloudinary.com/doki9ptsh/image/upload/c_fill,w_267,h_197/v1718981194/task_manager_oecbyu.png',
    projectUrl: 'https://tasktrove.ccbp.tech/',
  },
]

const categoryList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'REACT', displayText: 'React'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
]

class Projects extends Component {
  state = {activeTab: 'ALL'}

  getFilteredProjects = activeTabId => {
    if (activeTabId !== 'ALL') {
      const filteredProjects = initialProjectsList.filter(
        eachItem => eachItem.category === activeTabId,
      )
      return filteredProjects
    }
    return initialProjectsList
  }

  onChangeActiveTab = activeTabId => {
    this.setState({activeTab: activeTabId})
  }

  render() {
    const {activeTab} = this.state
    const filteredProjects = this.getFilteredProjects(activeTab)
    return (
      <div className="projectMain_Ctn">
        <h1 className="myProjects_main_Heading">My Projects</h1>
        <div className="projectCtn">
          <ul className="tablist">
            {categoryList.map(eachItem => (
              <TabItem
                key={eachItem.id}
                tabDetails={eachItem}
                onChangeActiveTab={this.onChangeActiveTab}
                isActive={eachItem.id === activeTab}
              />
            ))}
          </ul>
          <ul className="projectListCtn">
            {filteredProjects.map(eachItem => (
              <ProjectItemCard
                key={eachItem.projectId}
                projectDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Projects
