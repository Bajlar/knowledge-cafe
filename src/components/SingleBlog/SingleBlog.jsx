import React from 'react';
import Card from 'react-bootstrap/Card';
import './SingleBlog.css';
import icon from '../../images/bookmark.png';

const SingleBlog = (props) => {
  // console.log(props);
  // console.log(props.blog);
  const {authorName, blogTitle, authorImage, readTime, publishDate, images} = props.blog;

  const handleBookMark = props.handleBookMark;

  const handleMarkToTime = props.handleMarkToTime;
  // console.log(handleMarkToTime);
  
  return (
    <div>
      <Card className='mb-3'>
        <Card.Img variant="top" className="banner-pic" src={images} />
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-3 mb-3'>
              <div className='author-pic'>
                <img src={authorImage} alt="" />
              </div>
              <div>
                <h4>{authorName}</h4>
                <small>{publishDate}</small>
              </div>
            </div>
            <div className='d-flex gap-3'>
              <p>{readTime} min read</p> 
              <a onClick={() => handleBookMark(props.blog)}><img src={icon} alt="" /></a>
            </div>
          </div>
          <Card.Text>
            <h3>{blogTitle}</h3>
            <p>#beginners #programming</p>
            <a onClick={() => handleMarkToTime(props.blog)} className='mark-as-read' href="#">Mark as read</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBlog;