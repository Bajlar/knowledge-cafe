import React from 'react';
import './BlogAnswer.css';

const BlogAnswer = () => {
  return (
    <div className='container mt-4'>
      <div className="box-container p-4 border border-dark">
        <h2 className='text-center text-primary'>Answers of the following questions</h2>
        <h4 className='questions mt-3'><mark>1. Props vs state:</mark></h4>
        <p>Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>
        <p>State: State is owned locally and the component itself updates it. The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>

        <h4 className='questions mt-3'><mark>2. How does useState work:</mark></h4>
        <p>useState: useState is React Hook that allows you to add state to a functional component. It returns an array with two values. The current state and a function to update it</p>

        <h4 className='questions mt-3'><mark>3. Purpose of useEffect other than fetching data:</mark></h4>
        <ul>
          <li>Connecting to an external system</li>
          <li>Wrapping Effects in custom Hooks</li>
          <li>Fetching data with Effects</li>
          <li>Updating state based on previous state from an Effect</li>
          <li>Removing unnecessary object dependencies</li>
          <li>Removing unnecessary function dependencies</li>
          <li>Displaying different content on the server and the client</li>
        </ul>
        
        <h4 className='questions mt-3'><mark>4. How Does React work:</mark></h4>
        <p>React: ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
        It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</p>
      </div>
    </div>
  );
};

export default BlogAnswer;