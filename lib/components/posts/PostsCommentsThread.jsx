import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ModalTrigger, Components, replaceComponent, Utils } from 'meteor/vulcan:core';
import Comments from 'meteor/vulcan:comments';
import { Row, Col } from 'react-bootstrap';


const BootPostsCommentsThread = (props, context) => {

  const {loading, terms: { postId }, results, totalCount} = props;
  
  if (loading) {
  
    return <div className="posts-comments-thread"><Components.Loading/></div>
  
  } else {
    
    const resultsClone = _.map(results, _.clone); // we don't want to modify the objects we got from props
    const nestedComments = Utils.unflatten(resultsClone, '_id', 'parentCommentId');

    return (
      <div className="section-comments">
        <Row>
          <Col md={12}>
            <div className="media-area">
              {!!props.currentUser ?
              <div className="section-half">
                <h4 className="title"><FormattedMessage id="comments.new"/></h4>
                <Components.CommentsNewForm postId={postId}  type="comment" />
              </div>
              :
              <div className="section-quarter">
                <Components.ModalTrigger size="small" component={<h5 className="title"><a><FormattedMessage id="comments.please_log_in"/></a></h5>}>
                  <Components.AccountsLoginForm />
                </Components.ModalTrigger>
              </div>
              }

              <div className="section-components-sm">
                <h4 className="title"><FormattedMessage id="comments.comments"/></h4>
              </div>
              <Components.CommentsList comments={nestedComments} commentCount={totalCount}/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
};

BootPostsCommentsThread.displayName = "BootPostsCommentsThread";

replaceComponent('PostsCommentsThread', BootPostsCommentsThread);
