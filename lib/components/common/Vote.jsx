import { Components, getRawComponent, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { withVote, hasUpvoted, hasDownvoted } from 'meteor/vulcan:voting';
import { FormattedMessage, intlShape } from 'react-intl';

class BootVote extends getRawComponent('Vote') {

  render() {
    return (
      <div className={this.getActionClass()}>
        <a className="btn btn-sm" onClick={this.upvote}>
          {this.state.loading ? <Components.Icon name="spinner" /> : <Components.Icon name="upvote" /> }
          {this.props.document.baseScore || 0}
        </a>
      </div>
    )
  }

}

replaceComponent('Vote', BootVote);
