import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='question-ans'>  
            <h2 className='heading-ques'>Some Question and ans solve</h2>
            <div className='ans'>
              <h2>1.What is difference between uncontrolled and controlled components ?</h2>
               <div className='question-1'>
                <div>
                    <h3>Uncontrolled components</h3>
                    <p> 1. In controlled components, the parent component is responsible for managing the state and passing it down as props to the controlled component.<br/> 2.This makes it easy to track the state of the component and predict how it will behave. <br/>3.However, in larger projects with many levels of nested components, this can make the code more complex and harder to manage</p>
                </div>
                <div>
                    <h3>controlled components</h3>
                    <p>1.On the other hand,  uncontrolled components manage their own state using a ref to access the DOM element's current value and update the state accordingly.<br/> 2.This makes them simpler to implement, but they can be more difficult to track and manage in larger projects.<br/>3.In React, controlled components refer to components that have their state and behavior controlled by the parent component.</p>
                </div>
               </div>
              
              <h2>2.How to validate React props using prop types?</h2>
                <ul>
                    <li>1.any : The prop can be of any data type.</li>
                    <li>2.bool : The prop should be a Boolean.</li>
                    <li>3.number : The prop should be a number.</li>
                    <li>4.string : The prop should be a string.</li>
                    <li>5.func : The prop should be a function.</li>
                    <li>6.array : The prop should be an array.</li>
                    <li>7.object : The prop should be an object.</li>
                </ul>
            <h2>3.What is difference between node js and express js?
               </h2>
               <div className='question-1'>
                <div>
                    <h3>Node js</h3>
                    <p>1.It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.   <br/>2.The callback function can handle requests with non-blocking I/O calls, and if necessary can spawn threads from a pool to execute blocking or CPU-intensive operations and to load-balance across CPU cores. <br/>3. Node’s approach to scaling with callback functions requires less memory to handle more connections than most competitive architectures that scale with threads, including Apache HTTP Server, the various Java application servers, IIS and ASP.NET, and Ruby on Rails.</p>
                </div>
                <div>
                <h3> Express js</h3>
              <p> 1.Express is a framework of Node.js that allows you to use several very useful and powerful features without having to reinvent the wheel, helps you organize your application’s routing and use any templating solution with minimal effort      <br/>2.It also allows for much better organization of your code. In my personal opinion, Express.js is the best Node.js framework but Meteor.js, Derby.js, Sails.js and Flatiron.js are some of the best alternatives. <br/> 3.It is the de facto framework for Node.js, meaning in practice, most of the developers who use Node.js for backend development also use the Express.js framework.  <br/>  </p>

                </div>
               </div>
               <h2>4.What is customhook ,and why will you create customhook?</h2>
               <p> Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications.<br/> Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. <br/>
               <ul>
                <li>1.A custom hook does not require a specific signature.</li>
                <li>2.A software developer can choose what argument the custom hook has and what should the argument return.</li>
                <li>3.A custom hook always starts with the name ‘use’.</li>
               </ul>
               </p>
               </div>
        </div>
    );
};

export default Blog;