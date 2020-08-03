import { Group5Module } from './group5.module';

describe('Group5Module', () => {
  let group5Module: Group5Module;

  beforeEach(() => {
    group5Module = new Group5Module();
  });

  it('should create an instance', () => {
    expect(group5Module).toBeTruthy();
  });
});
