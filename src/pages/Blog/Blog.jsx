import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="py-5">
      <Helmet>
        <title>Blog - Get Snappy</title>
      </Helmet>
      <Container className="w-40">
        <div className="gridRow">
          <div className="p-4 rounded-4 bg-light">
            <h4>Difference between SQL & NoSQL?</h4>
            <p>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL
            </p>
          </div>
          <div className="p-4 rounded-4 bg-light">
            <h4>What is JWT, and how does it work?</h4>
            <p>
              JSON Web Token (JWT) is an open standard that defines a compact
              and self-contained way for securely transmitting information
              between parties as a JSON object.
            </p>
            <p>
              WTs are digitally signed using either a secret or a public/private
              key pair which safeguards them from being modified by the client
              or an attacker. Stored only on the client: You generate JWTs on
              the server and send them to the client. The client then submits
              the JWT with every request.
            </p>
          </div>
          <div className="p-4 rounded-4 bg-light">
            <h4>What is the difference between JavaScript and NodeJS?</h4>
            <p>
              JavaScript is a proper high-level programming language used to
              create web scripts whereas Node.js is a run time environment built
              on Google's v8 engine. JavaScript is executed in the browser
              whereas using Node.js gives us the ability to execute JavaScript
              outside the browser. JavaScript can manipulate DOM or add HTML
              within whereas Node.js doesn't have the capability to add HTML.
              JavaScript is mainly used to create front end web applications or
              develop client-side whereas Node.js is used on the back end
              development that is server-side development.
            </p>
          </div>
          <div className="p-4 rounded-4 bg-light">
            <h4>How does NodeJS handle multiple requests at the same time?</h4>
            <p>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
