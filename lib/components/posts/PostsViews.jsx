import { registerComponent, withCurrentUser } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router'
import Users from 'meteor/vulcan:users';

const PostsViews = (props, context) => {

  let views = ["top", "new", "best"];
  const adminViews = ["pending", "rejected", "scheduled"];

  if (Users.canDo(props.currentUser, "posts.edit.all")) {
    views = views.concat(adminViews);
  }

  const query = _.clone(props.router.location.query);

  return (
    <div className="posts-views center-align margin-bottom-sm">
      <Nav bsStyle="pills" activeKey={2} className="nav-pills-pink">
        {views.map(view =>
          <LinkContainer key={view} to={{ pathname: "/articles/", query: {...query, view: view} }}>
            <NavItem>
              <FormattedMessage id={"posts."+view}/>
            </NavItem>
          </LinkContainer>
        )}
      </Nav>
    </div>
  )
}

PostsViews.propTypes = {
  currentUser: React.PropTypes.object,
  defaultView: React.PropTypes.string
};

PostsViews.defaultProps = {
  defaultView: "top"
};

PostsViews.contextTypes = {
  currentRoute: React.PropTypes.object,
  intl: intlShape
};

PostsViews.displayName = "PostsViews";

registerComponent('PostsViews', PostsViews, withCurrentUser, withRouter);
