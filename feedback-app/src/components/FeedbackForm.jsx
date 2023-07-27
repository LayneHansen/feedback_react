import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length < 10) {
      setMessage('Text must be at least ten characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(text.trim().length > 10 ) {
      const newFeedback = {
        text, 
        rating
      }
      
      handleAdd(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you rate our service?</h2>
        <RatingSelect select={setRating} selected={rating}/>
      </form>
      <div className="input-group">
        <input 
          onChange={handleTextChange}
          type="text" 
          placeholder='Write a Review' 
          value={text}
        />
        <Button 
          type='submit'
          isDisabled={btnDisabled}
        >
          SEND
        </Button>
      </div>

        {message && <div className='message'>{message}</div>}
    </Card>
  )
}

export default FeedbackForm