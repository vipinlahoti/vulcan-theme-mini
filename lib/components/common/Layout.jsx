import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';

class BootLayout extends Component {

  render() {
    return (
      <div>
        <Components.HeadTags />
        <Components.UsersProfileCheck {...this.props} />
        <Components.Header {...this.props}/>
        <Components.FlashMessages />
        
        {this.props.children}
        <Components.Footer {...this.props}/>
      </div>
    )
  }
}

BootLayout.displayName = "BootLayout";

replaceComponent('Layout', BootLayout);
