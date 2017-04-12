import { Components, replaceComponent } from 'meteor/vulcan:core';
import React from 'react';

const BootPostsListHeader = () => {

  return (
    <div>
      <h3 className="card-title">Search</h3>
      <Components.SearchForm/>

      <h3 className="card-title">Categories</h3>
      <Components.CategoriesList/>
      
      <h3 className="card-title">Views</h3>
      <Components.PostsViews/>
    </div>
  )
}

BootPostsListHeader.displayName = "BootPostsListHeader";

replaceComponent('PostsListHeader', BootPostsListHeader);
