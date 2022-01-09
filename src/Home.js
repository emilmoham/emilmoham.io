import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Jumbotron } from './components/Jumbotron'
import "./Home.css"

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch("https://api.emilmoham.io/blog/list/3")
    .then(res => res.json())
    .then((result) => {
      setBlog(blog => result[0]);
      setIsLoaded(true)
    }, 
    (error) => {
      console.log(error);
    })
  }, []);

  return (
  <React.Fragment>
      <Jumbotron />
    <Container>
      <Row>
        <Col lg>
          <h1>The Goal</h1>
          <p>
            I've thown together this website with the goal of  giving myself a
            space where I can build up my problem solving, programming, and
            communication skills simultaneously. The idea is to write blog 
            posts where I tackle a coding challenges tracking my initial 
            approach, areas where my knowledge is lacking, problems encountered,
            and lessons learned once the problem is solved. Hopefully I'll be 
            able to make that intersting. 
          </p> 
        </Col>
        <Col>
          <h1>Latest Blog</h1>
          <h3 className='blogTitle'><a href={"/blog/" + blog.uuid}>{blog.title}</a></h3>
          <p className='blogSummary'>
            {blog.short_description}
            <br/>
            <a href={"/blog/" + blog.uuid}>Coninue reading...</a>
          </p>
        </Col>
        <Col>
          <h1>Planned Features</h1>
          <ul>
            <li>Blog Tags </li>
            <li>Search</li>
            <li>Blog Thumbnails</li>
            <li>Archive Pagination</li>
          </ul>
        </Col>
      </Row>  
    </Container>   
  </React.Fragment>
)
}