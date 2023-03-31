import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect( () => {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, []);

  return (
    <div className='container mt-3'>
      <div className="row grid-cols-12 grid-cols-md-3 grid-cols-lg-2">
        <div className="col-md-8">
          <div className="blogPost-container">
            {
              blogs.map(blog => <SingleBlog
                key={blog.id}
                blog={blog}
              ></SingleBlog>)
            }
          </div>
        </div>
        <div className="col-md-4">
          <div className="bookmark-container">
            <div>
              <input className='w-100 p-3' type="text" />
              <h3>Spent time on read: </h3>
              <textarea className='w-100 mt-2' name="" id="" cols="" rows="10"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;