import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';


const BootPostsHome = (props, context) => {
  const terms = _.isEmpty(props.location && props.location.query) ? {view: 'top'}: props.location.query;
  const {showHeader = true} = props;

  return (
    <div>
      <div className="main">
        <Grid>
          <Row>
            <Col md={9}>
              <Components.PostsList terms={terms}/>
            </Col>
            <Col md={3}>
              <div className="sidebar">
                {showHeader ? <Components.PostsListHeader/> : null}
                <Components.Newsletter />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  )
};

BootPostsHome.displayName = "BootPostsHome";

replaceComponent('PostsHome', BootPostsHome);
