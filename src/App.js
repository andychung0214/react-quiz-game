import React from "react";
import './App.css';

import Home from "./Pages/Home";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import useState from 'react-usestateref';

import Result from './Pages/Result';
import Quiz from './Pages/Quiz';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  // setName("AndyLau");

  // const fetchQuestions = async (category = "") => {
  //   try {
  //     let apiUrl =
  //       `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}&type=boolean`;

  //     const response = await fetch((apiUrl));
  //     const result = await response.json();
  //     // console.log(result);
  //     setQuestions(result.results);

  //   } catch (err) {
  //     console.log("err=", err);
  //   }
  // }

  // fetchQuestions();

  const fetchQuestions = (category = "") =>{
    let apiUrl =
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}&type=boolean`;
    try {

      fetch(apiUrl, {
        method: 'GET'
      }).then(res => {
        return res.json();
      }).then(result => {
        setQuestions(result.results);
        console.log('result.results=', result.results);
      })
    } catch (error) {
      console.log("error=", error);

    }
  }

  return (
    <BrowserRouter>
      <div className="app">

        <Routes>
          <Route path="/" index element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
          <Route path="quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />} />
          <Route path="result" element={<Result name={name} score={score} />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
