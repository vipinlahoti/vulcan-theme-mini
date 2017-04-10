import { replaceComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid } from 'react-bootstrap';

const BootFooter = props => {
  return (
    <div className="footer">
      <Grid>
        <div className="copyright center-align footer-module">
            <a href="http://docs.vulcanjs.org" target="_blank"><FormattedMessage id="app.powered_by"/></a>          
        </div>
      </Grid>
    </div>
  )
}

BootFooter.displayName = "BootFooter";

replaceComponent('Footer', BootFooter);
