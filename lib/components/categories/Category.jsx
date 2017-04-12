import { ModalTrigger, Components, getRawComponent, replaceComponent } from 'meteor/vulcan:core';
import React, { PropTypes, Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router'
import Categories from 'meteor/vulcan:categories';

class BootCategory extends getRawComponent('Category') {

  render() {

    const {category, index, router} = this.props;
    const newQuery = _.clone(router.location.query);
    newQuery.cat = category.slug;

    return (
      <div className="category-menu-item dropdown-item">
        <LinkContainer to={{pathname:"/", query: newQuery}}>
          <MenuItem
            eventKey={index+1}
            key={category._id}
          >
            {category.name}
          </MenuItem>
        </LinkContainer>
        <Components.ShowIf check={Categories.options.mutations.edit.check} document={category}>{this.renderEdit()}</Components.ShowIf>
      </div>
    )
  }
}

replaceComponent('Category', BootCategory);
