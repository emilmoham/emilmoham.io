import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap"
import { NoMatch } from "./NoMatch"
import ReactMarkdown from 'react-markdown'
import './blog.css'

export function Blog() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blogTitle, setBlogTitle] = useState(null)
  const [blogDate, setBlogDate] = useState(null)
  const [blogContent, setBlogContent] = useState(null)
  //const [blogTags, setBlogTags] = useState([]);
  
  
  let { uuid } = useParams();
  
  useEffect(() => {
    fetch(`https://api.emilmoham.io/blog/${uuid}`)
      .then(res => res.json())
      .then((result) => {
        setIsLoaded(true)
        setBlogTitle(result.title)
        setBlogDate(result.created)
        setBlogContent(result.content)
        //setBlogTags(result.tags)
      }, 
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [uuid])

  if (error) {
    console.log(error);
    return <NoMatch />;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container className="blogContainer">
        <Row>
            <h1 id="blogTitle">{blogTitle}</h1>
            <p id="blogDate">{new Date(blogDate).toDateString()}</p>
        </Row>
        <Row>
          <Col className="blogContentContainer" md={9}>
            <div id="blogContent">
              <ReactMarkdown>
                {blogContent}
              </ReactMarkdown>
            </div>
          </Col>
          <Col md={3}>
            <h4 id="blogTagsHeader">Tags:</h4>
            {/* {
              blogTags.map(function(tag, index) {
                return <Button className="blogTag" key={index} variant="info" size="sm">{tag}</Button>
              })
            } */}
            <p><b>Coming soon:</b> a tag system to search for related blog posts!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}