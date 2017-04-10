import { Components, replaceComponent, withCurrentUser } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { Button } from 'react-bootstrap';

const grPostsNewButton = (props, context) => {

  const size = props.currentUser ? "large" : "small";
  const button = <Button className="btn-add btn-floating btn-large waves-effect waves-light pink pull-right"><Components.Icon name="add"/></Button>;
  return (
    <Components.ModalTrigger size={size} title={context.intl.formatMessage({id: "posts.new_post"})} component={button}>
      <Components.PostsNewForm />
    </Components.ModalTrigger>
  )
}

grPostsNewButton.displayName = "grPostsNewButton";

grPostsNewButton.propTypes = {
  currentUser: React.PropTypes.object,
};

grPostsNewButton.contextTypes = {
  messages: React.PropTypes.object,
  intl: intlShape
};

replaceComponent('PostsNewButton', grPostsNewButton, withCurrentUser);
