import React, {useEffect} from 'react';
import useState  from 'react-usestateref';
import { Link, withRouter, useHistory, useNavigate } from 'react-router-dom';
import './Result.css'

const Result = ({name, score}) => {
  let nav = useNavigate();


  useEffect(() => {
    if (!name) {
      nav('/testquiz');
    }
  }, [name, nav])
  return (
    <div className='rsult'>
      <span>Final Score: {score}</span>
      <button href="/testquiz">Back To Quiz Home Page</button>
    </div>
  )
}

export default Result