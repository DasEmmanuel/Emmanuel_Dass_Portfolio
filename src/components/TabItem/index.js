import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeActiveTab, isActive} = props
  const {id, displayText} = tabDetails

  const onClickTab = () => {
    onChangeActiveTab(id)
  }
  const tabButtonClassName = isActive ? 'isActiveBtn' : 'isNotActiveBtn'
  return (
    <li>
      <button
        type="button"
        className={`tabButton ${tabButtonClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
