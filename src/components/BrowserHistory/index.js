import './index.css'

const BrowserHistory = props => {
  const {resultList, onDeleteClick} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = resultList

  const onDelete = () => {
    onDeleteClick(id)
  }
  return (
    <div className="history-div">
      <div className="each-div">
        <li className="each-li">
          <p className="time"> {timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </li>

        <div className="btn-div">
          <button
            type="button"
            className="btn"
            data-testid="delete"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="del-icon"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BrowserHistory
