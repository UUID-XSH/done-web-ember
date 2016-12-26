import Ember from 'ember';

export default Ember.Service.extend({

  projects: null,

  init(){
    this._super(...arguments);
    this.set('projects', []);
  },

  all(){
    return [
      {
        name: 't1'
      },
      {
        name: 't2'
      }
    ];
  }
});
