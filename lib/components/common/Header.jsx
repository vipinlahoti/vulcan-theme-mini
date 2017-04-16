import React from 'react';
import { withCurrentUser, getSetting, Components, replaceComponent } from 'meteor/vulcan:core';
import { Button, Navbar, Nav } from 'react-bootstrap';

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
      </Navbar.Header>
      <Nav pullRight>
        {!!props.currentUser ?
          <Components.UsersMenu/>
        :
          <Components.ModalTrigger size="small" component={button}>
            <Components.AccountsLoginForm />
          </Components.ModalTrigger>          
        }
      </Nav>
    </Navbar>
  )
}

BootHeader.displayName = "BootHeader";

BootHeader.propTypes = {
  currentUser: React.PropTypes.object,
};

replaceComponent('Header', BootHeader, withCurrentUser);
