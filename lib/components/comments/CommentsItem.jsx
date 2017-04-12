import { Components, getRawComponent, replaceComponent, withCurrentUser, withMessages } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { intlShape, FormattedMessage, FormattedRelative } from 'react-intl';
import Comments from 'meteor/vulcan:comments';
import { ButtonToolbar, Button } from 'react-bootstrap';


class BootCommentsItem extends getRawComponent('CommentsItem') {

  renderComment() {
    const htmlBody = {__html: this.props.comment.htmlBody};

    const showReplyButton = !this.props.comment.isDeleted && !!this.props.currentUser;

    return (
      <div>
        <p dangerouslySetInnerHTML={htmlBody}></p>
        <div className="media-footer">
          <ButtonToolbar>
            { showReplyButton ?
            <Button bsSize="xsmall" className="btn btn-flat btn-sm waves-effect waves-dark" onClick={this.showReply} rel="tooltip" title="Reply a Comment">
              <Components.Icon name="reply"/> <FormattedMessage id="comments.reply"/>
            </Button>
            : null}
            <Components.ShowIf check={Comments.options.mutations.edit.check} document={this.props.comment}>
              <span>
                <a className="btn btn-flat btn-sm waves-effect waves-dark" onClick={this.showEdit}><Components.Icon name="edit"/> <FormattedMessage id="comments.edit"/></a>
              </span>
            </Components.ShowIf>
          </ButtonToolbar>
        </div>
      </div>
    )
  }

  renderReply() {

    return (
      <div className="comments-item-reply">
        <Components.CommentsNewForm
          postId={this.props.comment.postId}
          parentComment={this.props.comment}
          successCallback={this.replySuccessCallback}
          cancelCallback={this.replyCancelCallback}
          type="reply"
        />
      </div>
    )
  }

  renderEdit() {

    return (
      <Components.CommentsEditForm
        comment={this.props.comment}
        successCallback={this.editSuccessCallback}
        cancelCallback={this.editCancelCallback}
        removeSuccessCallback={this.removeSuccessCallback}
      />
    )
  }

  render() {
    const comment = this.props.comment;

    return (
      <div className="media" id={comment._id}>
        <div className="pull-left">
          <Components.UsersAvatar size="medium" user={comment.user}/>
        </div>

        <div className="media-body">
          <h4 className="media-heading">
            <Components.UsersName user={comment.user}/> <small>&middot; <FormattedRelative value={comment.postedAt}/></small>
          </h4>

          {this.state.showEdit ? this.renderEdit() : this.renderComment()}
          {this.state.showReply ? this.renderReply() : null}
        </div>

      </div>

    )
  }

}

replaceComponent('CommentsItem', BootCommentsItem);
