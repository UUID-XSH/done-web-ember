import Ember from 'ember';

let projects = [
  {
    name: 't1'
  },
  {
    name: 't2'
  }
];


export default Ember.Route.extend({


  model () {
    let v = {};
    v.projects = projects;
    console.log(v);
    return v;
  }

});
