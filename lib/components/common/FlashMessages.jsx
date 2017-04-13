import { Components, replaceComponent } from 'meteor/vulcan:core';
import React from 'react';
import { Grid } from 'react-bootstrap';


const FlashMessages = ({messages, clear, markAsSeen}) => {
  return (
    <Grid>
      <div className="flash-messages section-quarter">
        {messages
          .filter(message => message.show)
          .map(message => <Components.Flash key={message._id} message={message} clear={clear} markAsSeen={markAsSeen} />)}
      </div>
    </Grid>
  );
}

FlashMessages.displayName = "FlashMessages";

replaceComponent('FlashMessages', FlashMessages);
