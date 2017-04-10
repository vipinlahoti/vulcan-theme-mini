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
          
          <Jumbotron style={ headerBg }>
            <Grid>
              <Row>
                <Col md={8}>
                  <h1 className="title">{post.title}</h1>
                  <h5>
                    {post.user ? <div className="author">by Dr. <strong><Components.UsersName user={post.user}/></strong>, &nbsp;</div> : null}
                    { post.postedAt ? <FormattedRelative value={post.postedAt}/> : <FormattedMessage id="posts.dateNotDefined"/> }
                  </h5>
                </Col>
              </Row>
            </Grid>
          </Jumbotron>

          <div className="main z-depth-2">
            <Grid>
              <Row>
                <Col md={8} mdOffset={2}>

                  {post.thumbnailUrl ?
                  <div className="card card-single no-margin no-padding">
                    <div className="card-image">
                      <Components.PostsThumbnail post={post}/>
                    </div>
                  </div>
                  : null}

                  {post.htmlBody ? <div className="section-components" dangerouslySetInnerHTML={htmlBody}></div> : null}
                </Col>
              </Row>

              <Components.PostsCommentsThread terms={{postId: post._id, view: 'postComments'}} />
            </Grid>
          </div>

        </div> 
      );
      
    }
  }
}

replaceComponent('PostsPage', grPostsPage);
