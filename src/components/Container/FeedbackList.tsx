import { TriangleUpIcon } from '@radix-ui/react-icons';
import React from 'react'

const FeedbackList = () => {
  return (
    <ol className='feedback-list'>
      <li className='feedback'>
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>

        <div>
          <p>Dayan K.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eum quod consequuntur accusantium amet aspernatur.</p>
        </div>

        <p>4d</p>
      </li>
    </ol>
  )
}

export default FeedbackList