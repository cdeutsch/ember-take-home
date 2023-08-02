import EmberRouter from '@ember/routing/router';
import config from 'takehome/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType as EmberRouter["location"];
  rootURL = config.rootURL;
}

Router.map(function () {});
