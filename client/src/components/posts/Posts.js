import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/post";
import SideBar from "../layout/SideBar";
import { Container,Row,Col } from "reactstrap";

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container style={{ maxWidth: "100%" }}>
      <Row>
        <Col xs={3}>
          <SideBar />
        </Col>
        <Col xs={9}>
          <section className="container">
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">
              <i className="fas fa-user" /> Welcome to the community
            </p>
            <PostForm />
            <div className="posts">
              {posts.map((post) => (
                <PostItem key={post._id} post={post} />
              ))}
            </div>
          </section>
        </Col>
      </Row>
    </Container>
    // <div>
    //   <SideBar />
    //   <section className="container">
    //     <h1 className="large text-primary">Posts</h1>
    //     <p className="lead">
    //       <i className="fas fa-user" /> Welcome to the community
    //     </p>
    //     <PostForm />
    //     <div className="posts">
    //       {posts.map((post) => (
    //         <PostItem key={post._id} post={post} />
    //       ))}
    //     </div>
    //   </section>
    // </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
