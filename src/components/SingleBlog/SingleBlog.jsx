import React from 'react';
import Card from 'react-bootstrap/Card';
import './SingleBlog.css';
import icon from '../../images/bookmark.png';

const SingleBlog = (props) => {
  console.log(props.blog);
  const {AuthorName, BlogTitle, AuthorImage, ReadTime, PublishDate, Images} = props.blog;

  return (
    <div>
      <Card className='mb-3'>
        <Card.Img variant="top" className="banner-pic" src={Images} />
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex gap-3 mb-3'>
              <div className='author-pic'>
                <img src={AuthorImage} alt="" />
              </div>
              <div>
                <h4>{AuthorName}</h4>
                <small>{PublishDate}</small>
              </div>
            </div>
            <div className='d-flex gap-3'>
              <p>{ReadTime}</p> 
              <img src={icon} alt="" />
            </div>
          </div>
          <Card.Text>
            <h2>{BlogTitle}</h2>
            <p>#beginners #programming</p>
            <a className='mark-as-read' href="#">Mark as read</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBlog;