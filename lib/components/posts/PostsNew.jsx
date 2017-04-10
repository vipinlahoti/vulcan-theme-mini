import { Components, registerComponent, getRawComponent, getFragment, withMessages } from 'meteor/vulcan:core';
import Posts from "meteor/vulcan:posts";
import React, { PropTypes, Component } from 'react';
import { intlShape } from 'react-intl';
import { withRouter } from 'react-router';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';


const PostsNew = (props, context) => {
  return (
    <div>
      <Jumbotron>
        <Grid>
          <Row>
            <Col md={8}>
              <h1 className="title">Add an Article</h1>
              <h5>Meet the amazing team behind this project and find out more about how we work.</h5>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
      <div className="main z-depth-2">
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <div className="hide">
                <Components.CategoriesList />
              </div>
              <Components.ShowIf
                check={Posts.options.mutations.new.check}
                failureComponent={<Components.AccountsLoginForm />}
              >
                <div className="posts-new-form">
                  <Components.SmartForm
                    collection={Posts}
                    mutationFragment={getFragment('PostsPage')}
                    successCallback={post => {
                      props.router.push({pathname: Posts.getPageUrl(post)});
                      props.flash(context.intl.formatMessage({id: "posts.created_message"}), "success");
                    }}
                  />
                </div>
              </Components.ShowIf>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  )
}

PostsNew.propTypes = {
  router: React.PropTypes.object,
  flash: React.PropTypes.func,
}

PostsNew.contextTypes = {
  intl: intlShape
};

PostsNew.displayName = "PostsNew";

registerComponent('PostsNew', PostsNew, withRouter, withMessages);
