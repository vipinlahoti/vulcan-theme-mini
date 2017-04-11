import { Components, getRawComponent, replaceComponent, ModalTrigger } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router';
import Posts from "meteor/vulcan:posts";

class BootPostsItem extends getRawComponent('PostsItem') {

  renderActions() {
    return (
      <div className="stats card-admin">
        <ModalTrigger title="Edit Post" component={<a className="btn btn-sm"><Components.Icon name="mode_edit" /> <FormattedMessage id="posts.edit"/></a>}>
          <Components.PostsEditForm post={this.props.post} />
        </ModalTrigger>
      </div>
    )
  }

  render() {

    const post = this.props.post;

    let postClass = "card";
    if (post.sticky) postClass += " card-sticky";

    return (
      <div className={postClass}>
        <div className="card-content">
          
          {post.thumbnailUrl ?
            <div className="card-image">
              <Components.PostsThumbnail post={post}/>
            </div>
          : null}

          <h3 className="card-title">
            <Link to={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
              {post.title}
            </Link>
            {this.renderCategories()}
          </h3>

          <div className="card-excerpt">
            {post.excerpt}
          </div>

          <div className="card-footer">
            {post.user? <div className="author">by <strong><Components.UsersName user={post.user}/></strong>, &nbsp;</div> : null}
            <div className="author">
              <span className="card-time">
                <FormattedRelative value={post.postedAt}/>
              </span>
            </div>
            <div className="stats">
              <Link className="btn btn-sm" to={Posts.getPageUrl(post)}>
                <Components.Icon name="comment" />
                {post.commentCount}
              </Link>
            </div>
            <div className="stats">
              <Components.Vote collection={Posts} document={post} currentUser={this.props.currentUser}/>
            </div>
            
            {this.props.currentUser && this.props.currentUser.isAdmin ? <Components.PostsStats post={post} /> : null}
            {Posts.options.mutations.edit.check(this.props.currentUser, post) ? this.renderActions() : null}

          </div>

        </div>
      </div>
    )
  }
}

replaceComponent('PostsItem', BootPostsItem);
