export function initialize(application /* application */) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('route', 'projectService', 'service:project-service');
}

export default {
  name: 'project-initializers',
  initialize
};
