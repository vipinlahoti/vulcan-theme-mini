import { Components, getRawComponent, replaceComponent }from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage /*, intlShape */ } from 'react-intl';
import Formsy from 'formsy-react';
import { Input } from 'formsy-react-components';
import { Button } from 'react-bootstrap';


class BootNewsletter extends getRawComponent('Newsletter') {
  renderButton() {
    return <Components.NewsletterButton
              label="newsletter.subscribe"
              mutationName="addUserNewsletter"
              successCallback={() => this.successCallbackSubscription()}
              user={this.props.currentUser}
            />
  }

  renderForm() {
    return (
      <Formsy.Form className="newsletter-form" onSubmit={this.subscribeEmail}>
        <Input
          name="email"
          value=""
          placeholder={this.context.intl.formatMessage({id: "newsletter.email"})}
          type="text"
          layout="elementOnly"
        />
        <Button className="newsletter-btn" type="submit"><Components.Icon name="subscribe" /></Button>
      </Formsy.Form>
    )
  }

  render() {
    return (
      <div className="card newsletter-card">
        <div className="card-content">
          <h3 className="card-title"><FormattedMessage id="newsletter.title"/></h3>
          {this.props.currentUser ? this.renderButton() : this.renderForm()}
        </div>
      </div>
    );
  }

}

replaceComponent('Newsletter', BootNewsletter);
