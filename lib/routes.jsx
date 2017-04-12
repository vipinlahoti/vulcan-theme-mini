import { addRoute, getComponent } from 'meteor/vulcan:core';

addRoute({name: "WelcomeRoute", path: "/welcome-page", component: getComponent("WelcomePage")});
