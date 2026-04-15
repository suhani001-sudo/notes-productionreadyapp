import { useEffect, useState } from 'react'
import { getNotes } from '../api/api'
import Loader from '../components/Loader'
import { logError } from '../utils/logger'

function Notes() {
  const [notes, setNotes] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true) // ✅ FIX

  useEffect(() => {
    getNotes()
      .then(setNotes)
      .catch(err => {
        logError(err, 'Notes Page')
        setError('Failed to load notes')
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <Loader />

  if (error) {
    return (
      <div className='error'>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className='notes-container'>
         <p>{undefined.name}</p> 
      {notes.map(note => (
        <div key={note._id} className='note-card'>
          <p className='note-text'>{note.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Notes