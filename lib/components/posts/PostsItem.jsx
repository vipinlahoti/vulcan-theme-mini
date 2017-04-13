import { Components, getRawComponent, replaceComponent, ModalTrigger } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router';
import Posts from "meteor/vulcan:posts";

class BootPostsItem extends getRawComponent('PostsItem') {

  renderActions() {
    return (
      <div className="card-admin">
        <ModalTrigger title="Edit Post" component={<a className="btn btn-sm"><Components.Icon name="edit" /> <FormattedMessage id="posts.edit"/></a>}>
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
        
        {post.sticky ?
          <span className="sticky">
            <Components.Icon name="sticky" />
          </span>
        : null }
        
        {post.thumbnailUrl ?
          <div className="card-image">
            <Components.PostsThumbnail post={post}/>
          </div>
        : null}

        <div className="card-content">

          <div className="card-header">
            <div className="author">
              <span className="card-time">
                <Components.Icon name="time" /> <FormattedRelative value={post.postedAt}/>
              </span>
            </div>
            <div className="stats">
              <Components.Vote collection={Posts} document={post} currentUser={this.props.currentUser}/>
            </div>
            <div className="stats">
              <Link to={Posts.getPageUrl(post)} className="btn btn-sm">
                <Components.Icon name="comment" /> {post.commentCount}
              </Link>
            </div>
          </div>

          <h3 className="card-title">
            <Link to={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
              {post.title}
            </Link>
            {Posts.options.mutations.edit.check(this.props.currentUser, post) ? this.renderActions() : null}
          </h3>

          {this.renderCategories()}

          <div className="card-excerpt">
            {post.excerpt}
          </div>

          <div className="card-footer">
            {post.user? <div className="author"><Components.UsersAvatar user={post.user} size="small"/> <strong><Components.UsersName user={post.user}/></strong></div> : null}
            {this.props.currentUser && this.props.currentUser.isAdmin ? <Components.PostsStats post={post} /> : null}
          </div>
        </div>

      </div>
    )
  }
}

replaceComponent('PostsItem', BootPostsItem);
