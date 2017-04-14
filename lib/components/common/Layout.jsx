import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { Grid } from 'react-bootstrap';

class BootLayout extends Component {

  render() {
    return (
      <div>
        <Components.HeadTags />
        <Components.UsersProfileCheck {...this.props} />
        <Components.Header {...this.props}/>
        <Grid>
          <Components.FlashMessages />
        </Grid>
        
        {this.props.children}
        <Components.Footer {...this.props}/>
      </div>
    )
  }
}

BootLayout.displayName = "BootLayout";

replaceComponent('Layout', BootLayout);
