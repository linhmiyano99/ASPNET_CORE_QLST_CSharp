import { Group8Module } from './group8.module';

describe('Group8Module', () => {
  let group8Module: Group8Module;

  beforeEach(() => {
    group8Module = new Group8Module();
  });

  it('should create an instance', () => {
    expect(group8Module).toBeTruthy();
  });
});
