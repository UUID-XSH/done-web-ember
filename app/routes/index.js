import Ember from 'ember';

export default Ember.Route.extend({
  projectService : Ember.inject.service(),

  model () {
    var v = {};
    v.projects = this.get('projectService').all();
    return v;
  }

});
