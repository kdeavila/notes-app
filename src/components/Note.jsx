const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'Not important' : 'Important'

  return (
    <li className='note'>
      <span>{note.content} </span>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note