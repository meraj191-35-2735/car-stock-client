import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="blogs p-2 m-3">
        <h1>01. Difference between javascript and nodejs.</h1>
        <div className="d-flex container mt-4">
          <div className="me-3">
            <h3 className="text-center">JavaScript</h3>
            <ul>
              <li>
                JavaScript is a programming language. It is running in any web
                browser with a proper browser engine.
              </li>
              <li>
                {" "}
                Mainly using for any client-side activity for a web application,
                like possible attribute validation or refreshing the page in a
                specific interval or provide some dynamic changes in web pages
                without refreshing the page.
              </li>
              <li>
                JavaScript running any engine like Spider monkey (FireFox),
                JavaScript Core (Safari), V8 (Google Chrome).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-center">Node JS</h3>
            <ul>
              <li>
                It is an interpreter and environment for JavaScript with some
                specific useful libraries which JavaScript programming can use
                separately.
              </li>
              <li>
                It mainly used for accessing or performing any non-blocking
                operation of any operating system, like creating or executing a
                shell script or accessing any hardware-specific information or
                running any backend job.
              </li>
              <li>
                JNode JS only run in a V8 engine which mainly used by google
                chrome. And javascript program which will be written under this
                Node JS will be always run in V8 Engine.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blogs p-2 m-3">
        <h1>02. When should you use nodejs and when should you use mongodb.</h1>
        <h2 className="text-center">Use of Node JS</h2>
        <h5>Backend for social media networking</h5>
        <p>
          Many renowned names such as LinkedIn and Medium are rebuilt on
          Node.js. An essential combination of nodes is needed to build a
          backend for a social media networking site. Node.js provides
          blazing-fast routing with its V8 engine along with secure
          authentication. Scalability is one of the most significant factors
          which enriches a social media network.
        </p>
        <h5>Single-page application</h5>
        <p>
          Like single-page websites, Node.js can build a single-page app, where
          the look and feel are similar to a desktop application. Due to its
          versatile options, Node.js is a good fit for building social
          networking platforms, dynamic websites, and mailing solutions. What’s
          more, the asynchronous data flow quality on the backend in Node.js
          makes it the best bet for SPA development.
        </p>
        <h5>Chat application</h5>
        <p>
          Node.js offers exclusive advanced functionalities for real-time
          chatbots and chat applications. The key features such as multi-user
          applications, intensive data, heavy traffic across all devices are
          very popular in chatbots. Node.js hits the sweet spot, for it runs
          across different devices and covers all paradigms in chat and chatbot
          apps. In addition, Node.js makes it easy to execute push notifications
          and server-side event loops popular in IMs and real-time apps.
        </p>
        <h2 className="text-center">Use of Mongodb</h2>
        <p>
          MongoDB facilitate to store database in json(javascript object
          notation) (or simply when data in form of key value pair) this is very
          fast and efficient so you should use it when you have key value pair
          to store(json data) one of the best advantage with MongoDB is you can
          store a collection inside another collection (in relational database
          is can be said as table inside another table) this neglect use of
          “join” You can also store a array inside a field (neglect use of
          foreign key of relational model) in this you can use concepts like
          mongo population to join data of multipal fields if require and most
          importantly it support More user at a time and also useful if you have
          large number of fields ( large number of coloums in your collection or
          table)
        </p>
      </div>
      <div className="blogs p-2 m-3">
        <h1>03. Differences between sql and nosql databases.</h1>
        <div className="d-flex container mt-4">
          <div className="me-3">
            <h3 className="text-center">SQL</h3>
            <ul>
              <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</li>
              <li>These databases have fixed or static or predefined schema</li>
              <li>
                These databases are not suited for hierarchical data storage.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-center">NoSQL</h3>
            <ul>
              <li>Non-relational or distributed database system.</li>
              <li>They have dynamic schema</li>
              <li>
                These databases are best suited for hierarchical data storage.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
