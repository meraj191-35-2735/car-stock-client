import React from "react";
import { Card } from "react-bootstrap";
import blogImage1 from "../../images/blogpost/blog1.jpg";
import blogImage2 from "../../images/blogpost/blog2.jpg";
import blogImage3 from "../../images/blogpost/blog3.jpg";
import user1 from "../../images/blogpost/user1.jpg";

const BlogPost = () => {
  return (
    <div>
      <h3 className="text-center my-5 ">
        Latest <span className="text-danger">Blog Post</span>
      </h3>
      <div className="d-flex">
        <Card style={{ backgroundColor: "#f5f5f5" }} className="mx-3">
          <Card.Img variant="top" src={blogImage1} />
          <div className="d-flex justify-content-center">
            <img
              className="rounded-pill my-3"
              src={user1}
              width={"50px"}
              alt=""
            />
          </div>
          <h6 className="text-center">Koushik Mitra</h6>
          <Card.Body>
            <Card.Title>
              2022 Bugatti Chiron: Again With The Overkill
            </Card.Title>
            <Card.Text>
              The CHIRON is the fastest, most powerful, and exclusive production
              super sports car in BUGATTI’s history.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: "#f5f5f5" }} className="mx-3">
          <Card.Img variant="top" src={blogImage2} />
          <div className="d-flex justify-content-center">
            <img
              className="rounded-pill my-3"
              src={user1}
              width={"50px"}
              alt=""
            />
          </div>
          <h6 className="text-center">Tanmoy Paul</h6>
          <Card.Body>
            <Card.Title>Ford Mustang EcoBoost Premium Convertible</Card.Title>
            <Card.Text>
              The Mustang is expected to continue offering a four-cylinder
              EcoBoost engine, as well as a V-8 in the GT model.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ backgroundColor: "#f5f5f5" }} className="mx-3">
          <Card.Img variant="top" src={blogImage3} />
          <div className="d-flex justify-content-center">
            <img
              className="rounded-pill my-3"
              src={user1}
              width={"50px"}
              alt=""
            />
          </div>
          <h6 className="text-center">Akash Dev</h6>
          <Card.Body>
            <Card.Title>2010 Audi A5 Auto Premium Quattro MY10</Card.Title>
            <Card.Text>
              The all-wheel drive Quattro 2.0 TFSI version develops 147kW and
              280Nm. The A5 experience is plush.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
