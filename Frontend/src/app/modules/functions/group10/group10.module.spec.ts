import { Group10Module } from './group10.module';

describe('Group10Module', () => {
  let group10Module: Group10Module;

  beforeEach(() => {
    group10Module = new Group10Module();
  });

  it('should create an instance', () => {
    expect(group10Module).toBeTruthy();
  });
});
