import { Model } from '@mean-expert/model';
/**
 * @module user
 * @description
 * Write a useful user Model description.
 * Register hooks and remote methods within the
 * Model Decorator
 **/
@Model({
  hooks: {
    beforeSave: { name: 'before save', type: 'operation' }
  },
  remotes: {
    customRemote: {
      returns : { arg: 'result', type: 'array' },
      http    : { path: '/my-remote', verb: 'get' }
    }
  }
})

class user {
  // LoopBack model instance is injected in constructor
  constructor(public model: any) {}

  // Example Operation Hook
  beforeSave(ctx: any, next: Function): void {
    //console.log('user: Before Save');
    next();
  }
  // Example Remote Method
  customRemote(next: Function): void {
    this.model.find(next);
  }
}

module.exports = user;
