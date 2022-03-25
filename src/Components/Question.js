import React from 'react'
import useState  from 'react-usestateref';
import { useNavigate } from 'react-router-dom';
import "./Question.css";
import ErrorMessage from "./ErrorMessage";

const Question = ({currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions}) => {
    
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    let navigate = useNavigate();

    const handleSelect = (i) =>{
        if (selected === i && selected === correct) {
            return "select"
        }else if (selected === i && selected !== correct) {
            return "wrong"
        } else if(i === selected){
            return "select"
        }
    }

    const handleCheck = (i) =>{
        setSelected(i);
        if (i === correct) {
            setScore(score + 1);
            setError(false);
        }
    }

    const handleNext = () =>{
        if (currQues > 8) {
            navigate("/result");
          } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
          } else setError("Please select an option first");
    }

    const handleQuit = () =>{
        setCurrQues(0);
        setQuestions();
        navigate('/');
    }

    const handleAnswer = (selectAnswer) =>{
        setSelected(selectAnswer);

        if (selectAnswer === correct) {
            setScore(score + 1);
            setError(false);
        }
    }

    const classAnswer = (selectAnswer) =>{
        if (selectAnswer === correct) {
            return "select"
        } else {
            return "wrong"
        }
    }
    return (
            <div className='question'>
                <h1>Question {currQues + 1}</h1>
                <div className='singleQuestion'>
                    <h2>{questions[currQues].question}</h2>
                    <div className='options'>
                        {error && <ErrorMessage>{error}</ErrorMessage>}

                        {options &&
                            options.map((i) => (
                                <button
                                    className={`singleOption ${selected && classAnswer(i)}`}
                                    key={i}
                                    onClick={() => handleAnswer(i)}
                                    disabled={selected}
                                >
                                    {i}
                                </button>
                            ))}

                        <div className='controls'>
                            <button
                                variant="contained"
                                color="secondary"
                                size="large"
                                style={{ width: 185 }}
                                href="/"
                                onClick={handleQuit}
                            >
                            Quit
                            </button>

                            <button
                                variant="contained"
                                color="primary"
                                size="large"
                                style={{ width: 185 }}
                                onClick={handleNext}
                            >
                            {currQues > 20 ? "Submit" : "Next Question"}
                            </button>

                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Question