import Ember from 'ember';

export default Ember.Route.extend({
  projectService : Ember.inject.service(),

  model () {
    var v = {};
    v.projects = [];
    console.log(projectService);
    return v;
  }

});
