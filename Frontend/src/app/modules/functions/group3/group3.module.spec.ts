import { Group3Module } from './group3.module';

describe('Group3Module', () => {
  let group3Module: Group3Module;

  beforeEach(() => {
    group3Module = new Group3Module();
  });

  it('should create an instance', () => {
    expect(group3Module).toBeTruthy();
  });
});
