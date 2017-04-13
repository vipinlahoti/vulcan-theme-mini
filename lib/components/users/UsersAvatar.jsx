import { replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import Users from 'meteor/vulcan:users';
import { Link } from 'react-router';

const BootUsersAvatar = ({user, size, link}) => {

  const sizes = {
    small: "40px",
    medium: "60px",
    large: "80px",
    xlarge: "120px",
    exlarge: "160px",
  }

  const aStyle = {
    height: sizes[size],
    width: sizes[size]
  };

  const imgStyle = {
    height: sizes[size],
    width: sizes[size]
  };

  const avatarUrl = Users.avatar.getUrl(user);

  const img = <img alt={Users.getDisplayName(user)} style={imgStyle} className="avatar img-circle img-responsive img-raised" src={avatarUrl} title={user.username}/>;
  const initials = <span className="avatar-initials"><span>{Users.avatar.getInitials(user)}</span></span>;

  const avatar = avatarUrl ? img : initials;

  return link ? <Link style={aStyle} className="users-avatar" to={Users.getProfileUrl(user)}>{avatar}</Link> : avatar;

}

BootUsersAvatar.propTypes = {
  user: React.PropTypes.object.isRequired,
  size: React.PropTypes.string,
  link: React.PropTypes.bool
}

BootUsersAvatar.defaultProps = {
  size: "medium",
  link: true
}

BootUsersAvatar.displayName = "BootUsersAvatar";

replaceComponent('UsersAvatar', BootUsersAvatar);
