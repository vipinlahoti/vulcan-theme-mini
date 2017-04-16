import { Components, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';


const BootPostsHome = (props, context) => {
  const terms = _.isEmpty(props.location && props.location.query) ? {view: 'top'}: props.location.query;

  return (
    <div>
      <div className="main">
        <Grid>
          <Components.PostsList terms={terms}/>
        </Grid>
      </div>
    </div>
  )
};

BootPostsHome.displayName = "BootPostsHome";

replaceComponent('PostsHome', BootPostsHome);
