import { Group9Module } from './group9.module';

describe('Group9Module', () => {
  let group9Module: Group9Module;

  beforeEach(() => {
    group9Module = new Group9Module();
  });

  it('should create an instance', () => {
    expect(group9Module).toBeTruthy();
  });
});
