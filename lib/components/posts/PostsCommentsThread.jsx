import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ModalTrigger, withList, withCurrentUser, Components, replaceComponent, Utils } from 'meteor/vulcan:core';
import Comments from 'meteor/vulcan:comments';
import { Row, Col } from 'react-bootstrap';


const grPostsCommentsThread = (props, context) => {

  const {loading, terms: { postId }, results, totalCount} = props;
  
  if (loading) {
  
    return <div className="posts-comments-thread"><Components.Loading/></div>
  
  } else {
    
    const resultsClone = _.map(results, _.clone); // we don't want to modify the objects we got from props
    const nestedComments = Utils.unflatten(resultsClone, '_id', 'parentCommentId');

    return (
      <div className="section-comments">
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="media-area">
              {!!props.currentUser ?
              <div className="section-components">
                <h4 className="title center-align"><FormattedMessage id="comments.new"/></h4>
                <Components.CommentsNewForm
                  postId={postId} 
                  type="comment" 
                />
              </div> :
              null
              }

              <div className="section-components-sm">
                <h4 className="title center-align"><FormattedMessage id="comments.comments"/></h4>
              </div>
              <Components.CommentsList comments={nestedComments} commentCount={totalCount}/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
};

grPostsCommentsThread.displayName = "grPostsCommentsThread";

grPostsCommentsThread.propTypes = {
  currentUser: React.PropTypes.object
};

const options = {
  collection: Comments,
  queryName: 'commentsListQuery',
  fragmentName: 'CommentsList',
  limit: 0,
};

replaceComponent('PostsCommentsThread', grPostsCommentsThread, [withList, options], withCurrentUser);
