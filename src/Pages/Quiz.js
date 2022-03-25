import React, {useEffect} from 'react';
import useState  from 'react-usestateref';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Col, Container, Row } from 'react-bootstrap';
import Question from '../Components/Question';
import Spinner from 'react-bootstrap/Spinner';
import './Quiz.css'

const Quiz = ({name, questions, score, setScore, setQuestions}) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
 
  useEffect(() => {
    console.log("questions=", questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions])


  const handleShuffle = (optionss) =>{
    return optionss.sort();
  }
  
  return (
    <>
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="quiz">
                <span className="subtitle">Welcome, {name}</span>
                {questions ?
                <div className='quizInfo'>
                  <span>{questions[currQues].category}</span>
                  <span>Score: {score}</span>
                  <Question
                    currQues={currQues}
                    setCurrQues={setCurrQues}
                    questions={questions}
                    options={options}
                    correct={questions[currQues]?.correct_answer}
                    score={score}
                    setScore={setScore}
                    setQuestions={setQuestions}
                  />

                </div>
                :
                <Spinner animation="border" variant="success" />
              }
              </div>

            </Col>
          </Row>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default Quiz