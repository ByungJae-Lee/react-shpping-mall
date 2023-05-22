import { useState } from 'react';
import './App.css';
import { Col, Row, Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App"> 

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop&Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}} href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }} href="0#">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Routes>
      <Route path='/' element={
        <>
        <div className='main-bg'></div>
        <Container>
          <Row>
          {
            shoes.map((a, i)=>{
              return (
                <Card shoes={shoes[i]} i={i} key={i}></Card>
              )}
          )}
          
        </Row>
      </Container>

        <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과)=>{ 
            let copy = [...shoes, ...결과.data];
            setShoes(copy);
          })

        }}>더보기</button>
      </>
      }/>
      <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
      
    </Routes>
      
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card (props) {
  return (
    <Col sm>
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'}
      width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}


export default App;

// 리액트 강의 2강
// html css 과제하나 해보기
// 11:30 PDS 작성


