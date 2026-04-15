import { useEffect, useState } from 'react'
import { getNotes } from '../api/api'
import Loader from '../components/Loader'
import { logError } from '../utils/logger'

function Notes () {
  const [notes, setNotes] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getNotes()
      .then(setNotes)
      .catch(err => {
        logError(err, 'Notes Page')
        setError('Failed to load notes')
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='notes-container'>
      {/* <p>{undefined.name}</p> */}
      {error && (
        <div className='error'>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {loading && <Loader />}

      {!loading &&
        !error &&
        notes.map(note => (
          <div key={note._id} className='note-card'>
            <p className='note-text'>{note.text}</p>
          </div>
        ))}
    </div>
  )
}

export default Notes
