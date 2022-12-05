import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, isActive, setActiveLanguageFilterId} = props
  const {id, language} = languageFilterDetails
  const className = isActive ? 'language-btn active-btn' : 'language-btn'
  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }
  return (
    <li>
      <button
        type="button"
        className={className}
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
