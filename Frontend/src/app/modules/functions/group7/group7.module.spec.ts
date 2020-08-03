import { Group7Module } from './group7.module';

describe('Group7Module', () => {
  let group7Module: Group7Module;

  beforeEach(() => {
    group7Module = new Group7Module();
  });

  it('should create an instance', () => {
    expect(group7Module).toBeTruthy();
  });
});
