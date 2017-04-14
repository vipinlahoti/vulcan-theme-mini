import React from 'react';
import { withCurrentUser, getSetting, Components, replaceComponent } from 'meteor/vulcan:core';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';

const BootHeader = (props, context) => {
  
  const logoUrl = getSetting("logoUrl");
  const siteTitle = getSetting("title", "My App");
  const tagline = getSetting("tagline");
  const button = <Button bsStyle="primary"><Components.Icon name="lock"/> Login</Button>

  return (
    <Navbar className="">
      <Navbar.Header>
        <Navbar.Brand>
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>  
      <Navbar.Collapse>
        {!!props.currentUser ?
          <Nav pullRight>
            <NavItem eventKey={4}>
              <Components.PostsNewButton/>
            </NavItem>
            <Components.UsersMenu/>
          </Nav>
          :
          <Nav pullRight>
            <Components.ModalTrigger size="small" component={button}>
              <Components.AccountsLoginForm />
            </Components.ModalTrigger>
          </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}

BootHeader.displayName = "BootHeader";

BootHeader.propTypes = {
  currentUser: React.PropTypes.object,
};

replaceComponent('Header', BootHeader, withCurrentUser);
