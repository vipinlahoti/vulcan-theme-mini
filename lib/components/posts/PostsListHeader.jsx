import { Components, replaceComponent } from 'meteor/vulcan:core';
import React from 'react';

const BootPostsListHeader = () => {

  return (
    <div>
      <div className="margin-b">
        <h3 className="card-title">Search</h3>
        <Components.SearchForm/>
      </div>
      
      <div className="margin-b">
        <h3 className="card-title">Categories</h3>
        <Components.CategoriesList/>
      </div>

      <div className="margin-b">
        <h3 className="card-title">Views</h3>
        <Components.PostsViews/>
      </div>
    </div>
  )
}

BootPostsListHeader.displayName = "BootPostsListHeader";

replaceComponent('PostsListHeader', BootPostsListHeader);
