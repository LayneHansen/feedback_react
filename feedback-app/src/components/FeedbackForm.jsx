import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How do you rate our service?</h2>
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
        >
          SEND
        </Button>
      </div>
    </Card>
  )
}

export default FeedbackForm