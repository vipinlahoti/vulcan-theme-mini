import { Components, replaceComponent, withDocument, withCurrentUser } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Users from 'meteor/vulcan:users';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';


const UsersProfile = (props) => {
  if (props.loading) {

    return <div className="page users-profile"><Components.Loading/></div>

  } else if (!props.document) {

    console.log(`// missing user (_id/slug: ${props.documentId || props.slug})`);
    return <div className="page users-profile"><FormattedMessage id="app.404"/></div> 
  
  } else {

    const user = props.document;

    const terms = {view: "userPosts", userId: user._id};

    return (
      <div className="main users-profile">
        <Components.HeadTags url={Users.getProfileUrl(user, true)} title={Users.getDisplayName(user)} />

        <Grid>
          <h4 className="title">
            {Users.getDisplayName(user)}
            <Components.ShowIf check={Users.options.mutations.edit.check} document={user}>
              <Link to={Users.getEditUrl(user)} className="btn btn-default btn-sm btn-dark"><Components.Icon name="edit" /> <FormattedMessage id="users.edit_account"/></Link>
            </Components.ShowIf>
          </h4>
          {user.htmlBio ? <div dangerouslySetInnerHTML={{__html: user.htmlBio}}></div> : null }
        
          <ul>
            {user.twitterUsername ? <li><a href={"http://twitter.com/" + user.twitterUsername}>@{user.twitterUsername}</a></li> : null }
            {user.website ? <li><a href={user.website}>{user.website}</a></li> : null }
          </ul>
          <h4 className="title"><FormattedMessage id="users.posts"/></h4>
          <Components.PostsList terms={terms} />

        </Grid>
      </div>
    )
  }
}

UsersProfile.propTypes = {
  // document: React.PropTypes.object.isRequired,
}

UsersProfile.displayName = "UsersProfile";

const options = {
  collection: Users,
  queryName: 'usersSingleQuery',
  fragmentName: 'UsersProfile',
};

replaceComponent('UsersProfile', UsersProfile, withCurrentUser, [withDocument, options]);
