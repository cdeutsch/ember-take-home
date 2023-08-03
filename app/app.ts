import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'takehome/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

// Detect when the keyboard is being used, so we can add styles based on it.
window.document.addEventListener('click', () => {
  window.document.body.classList.remove('keyboard-in-use');
});
window.document.addEventListener('keydown', (event: KeyboardEvent) => {
  if (
    event.key === 'Tab' ||
    ((event.metaKey || event.ctrlKey) && event.key === 'F6')
  ) {
    window.document.body.classList.add('keyboard-in-use');
  }
});
