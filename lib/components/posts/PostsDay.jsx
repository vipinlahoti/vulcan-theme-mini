import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';

class BootPostsDay extends Component {

  render() {

    const {date, posts} = this.props;
    const noPosts = posts.length === 0;

    return (
      <div className="section-quarter">
        <h4 className="title">{date.format("dddd, MMMM Do YYYY")}</h4>
        { noPosts ? <Components.PostsNoMore /> :
          <div className="card-columns">
            {posts.map(post => <Components.PostsItem post={post} key={post._id} currentUser={this.props.currentUser} />)}
          </div>
        }
      </div>
    )
  }
}

BootPostsDay.propTypes = {
  currentUser: React.PropTypes.object,
  date: React.PropTypes.object,
  number: React.PropTypes.number
}

replaceComponent('PostsDay', BootPostsDay);
