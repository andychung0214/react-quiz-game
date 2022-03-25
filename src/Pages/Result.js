import React, {useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import './Result.css'

const Result = ({name, score}) => {
  let nav = useNavigate();

  useEffect(() => {
    if (!name) {
      nav('/react-quiz-game');
    }
  }, [name, nav])
  return (
    <div className='rsult'>
      <span className="title">Final Score: {score}</span>
      <button variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/react-quiz-game">Back To Quiz Home Page</button>
    </div>
  )
}

export default Result