import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import blogDefaultImage from './assets/blog_default.png'
import './Archive.css'

export function Archive()  {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://api.emilmoham.io/blog/list")
      .then(res => res.json())
      .then((result) => {
        setBlogs(blogs => result);
        setIsLoaded(true)
      },
      (error) =>{
        console.log(error)
      })
  }, [])
  
  if(!isLoaded)
    return(
      <div>Loading...</div>
    )
  else {
    return (
      <Container>
        <h1>Blog Archives</h1>
        {
          blogs.map(function(blog, index) {
            return (
              <Container fluid key={index} className='blogEntry'>
                <Row>
                  <Col xs="auto">
                    <img className='blogThumbnail' width={150} height={150} alt='Thumbnail' src={ blogDefaultImage } />
                  </Col>
                  <Col xs>
                    <h3><a href={"/blog/" + blog.uuid}>{blog.title}</a></h3>
                    <div>
                      <p>
                        {blog.short_description}
                        <br/>
                        <a href={"/blog/" + blog.uuid}>Read More...</a>
                      </p>
                    </div>
                    <h6>{new Date(blog.created).toDateString()}</h6>
                  </Col>
                </Row>
                
                
              </Container>
            )
          })
        }
      </Container>
    )
  }
}