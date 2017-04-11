import { Components, getRawComponent, replaceComponent, withDocument, withCurrentUser, getActions, withMutation } from 'meteor/vulcan:core';
import Posts from 'meteor/vulcan:posts';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';


class grPostsPage extends getRawComponent('PostsPage') {

  render() {
    if (this.props.loading) {
      
      return (
        
        <div className="posts-page"><Components.Loading/></div>
      )
      
    } else if (!this.props.document) {
      
      console.log(`// missing post (_id: ${this.props.documentId})`);
      return <div className="posts-page"><FormattedMessage id="app.404"/></div> 

    } else {
      const post = this.props.document;
      const htmlBody = {__html: post.htmlBody};
      const headerBg = {
        background: `url(${Posts.getThumbnailUrl(post)}) no-repeat 50% center / cover`
      }

      return (
        <div>

          <Components.HeadTags url={Posts.getPageUrl(post)} title={post.title} image={post.thumbnailUrl} description={post.excerpt} />

          <div className="main">
            <Grid>
              <Row>
                <Col md={9}>
                  <div className="post-page">
                    <h3 className="title">{post.title}</h3>
                    {post.user ? <span>by <strong><Components.UsersName user={post.user}/></strong>, &nbsp;</span> : null}
                    <span className="card-time">
                      <FormattedRelative value={post.postedAt}/>
                    </span>
                    {post.thumbnailUrl ?
                    <div className="card card-single no-padding">
                      <div className="card-image no-margin">
                        <Components.PostsThumbnail post={post}/>
                      </div>
                    </div>
                    : null}

                    <div className="text-center">
                      
                    </div>

                    {post.htmlBody ? <div className="section-components" dangerouslySetInnerHTML={htmlBody}></div> : null}
                  </div>
                  <Components.PostsCommentsThread terms={{postId: post._id, view: 'postComments'}} />
                </Col>

                <Col md={3}>
                  <div className="sidebar">
                    <Components.PostsListHeader/>
                    <Components.Newsletter />
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>

        </div> 
      );
      
    }
  }
}

replaceComponent('PostsPage', grPostsPage);
