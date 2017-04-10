import { Components, getRawComponent, replaceComponent, ModalTrigger } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router';
import Posts from "meteor/vulcan:posts";

class grPostsItem extends getRawComponent('PostsItem') {

  renderActions() {
    return (
      <div className="stats article-admin">
        <ModalTrigger title="Edit Post" component={<a className="btn btn-flat btn-sm waves-effect waves-dark"><Components.Icon name="mode_edit" /> <FormattedMessage id="posts.edit"/></a>}>
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

        <div className="article-thumbnail">
          {post.thumbnailUrl ?
            <div className="card-image">
              <Components.PostsThumbnail post={post}/>
            </div>
          : null}
        </div>

          <h3 className="card-title">
            <Link to={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
              {post.title}
            </Link>
          </h3>

          <div className="article-excerpt">
            {post.excerpt}
          </div>

          <div className="card-footer">
            {post.user? <div className="author">by Dr. <strong><Components.UsersName user={post.user}/></strong>, &nbsp;</div> : null}
            <div className="author">
              <span className="article-time">
                <FormattedRelative value={post.postedAt}/>
              </span>
            </div>
            <div className="stats">
              <Link className="btn btn-flat btn-sm waves-effect waves-dark" to={Posts.getPageUrl(post)}>
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

replaceComponent('PostsItem', grPostsItem);
