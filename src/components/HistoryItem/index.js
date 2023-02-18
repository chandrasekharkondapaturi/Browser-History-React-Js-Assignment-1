import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="row-container">
        <p className="time">{timeAccessed}</p>
        <div className="row">
          <img src={logoUrl} alt="domain logo" className="image" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="button"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
