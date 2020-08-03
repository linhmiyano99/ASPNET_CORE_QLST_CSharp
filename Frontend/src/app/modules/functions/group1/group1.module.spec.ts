import { Group1Module } from './group1.module';

describe('Group1Module', () => {
  let group1Module: Group1Module;

  beforeEach(() => {
    group1Module = new Group1Module();
  });

  it('should create an instance', () => {
    expect(group1Module).toBeTruthy();
  });
});
