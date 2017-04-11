import { Components, replaceComponent } from 'meteor/vulcan:core';
import React from 'react';

const BootPostsListHeader = () => {

  return (
    <div>
      <Components.SearchForm/>
      <Components.CategoriesList />
      <Components.PostsViews />
    </div>
  )
}

BootPostsListHeader.displayName = "BootPostsListHeader";

replaceComponent('PostsListHeader', BootPostsListHeader);
