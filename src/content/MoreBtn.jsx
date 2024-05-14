export default function MoreBtn({ handleShowForm, text }) {

  return(
    <button type="button" className={`more`} onClick={handleShowForm}>
          {text}
    </button>
  )
}