import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './BlogPost.css';

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  const [time, setTime] = useState([]);

  useEffect( () => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, []);

  const handleBookMark = (blog) => {
    // console.log(blog);
    const newBookMark = [...bookMark, blog];
    setBookMark(newBookMark);
  }

  const handleMarkToTime = (blog) => {
    console.log(blog);
    const newTime = parseInt((blog.ReadTime) + time);
    setTime(newTime);
  }

  return (
    <div className='container mt-3'>
      <div className="row grid-cols-12 grid-cols-md-3 grid-cols-lg-2">
        <div className="col-md-8">
          <div className="blogPost-container">
            {
              blogs.map(blog => <SingleBlog
                key={blog.id}
                blog={blog}
                handleBookMark={handleBookMark}
                handleMarkToTime={handleMarkToTime}
              ></SingleBlog>)
            }
          </div>
        </div>
        <div className="col-md-4">
          <div className="bookmark-container">
            <div>
              <div className="box box1">
                <h5>Spent time on read: {time}</h5>
              </div>
              <div className="box box2 mt-4">
                <h5>Bookmarked Blogs : {bookMark.length}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;