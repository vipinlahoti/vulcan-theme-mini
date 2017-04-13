import { replaceComponent, withCurrentUser } from 'meteor/vulcan:core';
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
    <div className="posts-views margin-b-sm">
      <Nav bsStyle="pills">
        {views.map(view =>
          <LinkContainer key={view} to={{ pathname: "/", query: {...query, view: view} }}>
            <NavItem>
              <FormattedMessage id={"posts." + view}/>
            </NavItem>
          </LinkContainer>
        )}
        <LinkContainer to={"/daily"} className="dropdown-item">
          <NavItem className={"bar"}>
            <FormattedMessage id="posts.daily"/>
          </NavItem>
        </LinkContainer>
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

replaceComponent('PostsViews', PostsViews, withCurrentUser, withRouter);
