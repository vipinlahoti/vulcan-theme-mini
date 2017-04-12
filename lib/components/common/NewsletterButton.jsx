import { Components, getRawComponent, replaceComponent, withMutation, withCurrentUser, withMessages, Utils } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { Button } from 'react-bootstrap';

class NewsletterButton extends getRawComponent('NewsletterButton') {

  render() {
    
    return (
      <Button
        className="newsletter-button"
        onClick={this.subscriptionAction}
        bsStyle="primary"
      >
        <FormattedMessage id={this.props.label}/>
      </Button>
    )
  }
}

replaceComponent('NewsletterButton', NewsletterButton);
