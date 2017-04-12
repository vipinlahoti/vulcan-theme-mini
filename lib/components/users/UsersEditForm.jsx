import { Components, registerComponent, withCurrentUser, withMessages } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import Users from 'meteor/vulcan:users';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';


const BootUsersEditForm = (props, context) => {

  return (
    <div>
      <Jumbotron>
        <Grid>
          <Row>
            <Col md={8}>
              <h1 className="title"><FormattedMessage id="users.edit_account"/></h1>
              <h5>Meet the amazing team behind this project and find out more about how we work.</h5>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
      <div className="main z-depth-2">
        <Grid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Components.ShowIf
                check={Users.options.mutations.edit.check}
                document={props.terms.documentId ? {_id: props.terms.documentId} : {slug: props.terms.slug}}
                failureComponent={<FormattedMessage id="app.noPermission"/>}
              >
                <Components.SmartForm 
                  collection={Users} 
                  {...props.terms}
                  successCallback={user => {
                    props.flash(context.intl.formatMessage({id: "users.edit_success"}, {name: Users.getDisplayName(user)}), 'success')
                  }}
                  showRemove={true}
                />
              </Components.ShowIf>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
};


BootUsersEditForm.propTypes = {
  terms: React.PropTypes.object, // a user is defined by its unique _id or its unique slug
};

BootUsersEditForm.contextTypes = {
  intl: intlShape
};

BootUsersEditForm.displayName = "BootUsersEditForm";

registerComponent('UsersEditForm', BootUsersEditForm, withMessages, withCurrentUser);
