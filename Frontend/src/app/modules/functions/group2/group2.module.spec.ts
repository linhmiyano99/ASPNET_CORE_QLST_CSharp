import { Group2Module } from './group2.module';

describe('Group2Module', () => {
  let group2Module: Group2Module;

  beforeEach(() => {
    group2Module = new Group2Module();
  });

  it('should create an instance', () => {
    expect(group2Module).toBeTruthy();
  });
});
