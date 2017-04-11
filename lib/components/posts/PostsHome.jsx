import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';


const BootPostsHome = (props, context) => {
  const terms = _.isEmpty(props.location && props.location.query) ? {view: 'top'}: props.location.query;

  return (
    <div>
      <Jumbotron className="section-components">
        <Grid>
          <Row>
            <Col md={6}>
              <div className="image-container image-container-left">
                <img src="http://grudr.com/slider-1.jpg" alt="" />
              </div>
            </Col>
            <Col md={5} mdOffset={1}>
              <div className="card">
                <h3 className="title">Basic Components</h3>
                <div className="card-footer">
                  <div className="author">
                    by <a className="users-name" href="">johndoe</a>, <span className="article-time">5 days ago</span>
                  </div>
                </div>
                <p>We re-styled every Bootstrap element to make it resemble Material Design and also fit with each other. All the Bootstrap components that you need in a development have been re-design with the new look. Besides the numerous basic elements, we have also created additional classes. All these items will help you take your project to the next level.
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
      <div className="main">
        <Grid>
          <Components.PostsList terms={terms}/>
        </Grid>
      </div>
    </div>
  )
};

BootPostsHome.displayName = "BootPostsHome";

replaceComponent('PostsHome', BootPostsHome);
