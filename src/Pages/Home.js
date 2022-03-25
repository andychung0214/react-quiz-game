import React, { useEffect, useRef } from 'react';
import { Navigate, useNavigate, useLocation, BrowserRouter , Routes, Route, Outlet, Link } from "react-router-dom";

import useState  from 'react-usestateref';
import { Form, Button, Dropdown } from 'react-bootstrap';
import Categories from '../Components/Categories';
import ErrorMessage from '../Components/ErrorMessage';

import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Home.css'

const Home = ({name, setName, fetchQuestions}) => {
  
  const [categoryName, setCategoryName, categoryNameRef] = useState("");
  const [error, setError] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  const selectCategoryRef = useRef(null);
  const inputNameRef = useRef(null);

  // console.log('userName=', userName);
  const handleSubmit = (event) => {
    if (!categoryName || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(categoryName);
      navigate("/quiz");
    }

  };
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
          {/* {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>} */}
            {/* {error && <ErrorMessage>Please Fill all the field</ErrorMessage>} */}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>請填入姓名</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your name"
                  ref={inputNameRef}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCategory">
                {/* <Form.Label>請選題目分類</Form.Label>
          <Form.Control type="text" placeholder="Select Your category" /> */}

                <Form.Label>請選題目分類</Form.Label>

                <Form.Control
                  as="select"
                  style={{ width: 'auto', display: 'inline' }}
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                  }}
                  ref={selectCategoryRef}
                  aria-label="選擇題目分類"
                >
                  {Categories.map((cat) => (
                    <option
                      key={cat.value}
                      value={cat.value}
                      ref={selectCategoryRef}
                    >
                      {cat.category}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button variant="success" type="submit" size="larage" onClick={handleSubmit}>
                開始作答
              </Button>
            </Form>
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
};

export default Home;
