import { Group6Module } from './group6.module';

describe('Group6Module', () => {
  let group6Module: Group6Module;

  beforeEach(() => {
    group6Module = new Group6Module();
  });

  it('should create an instance', () => {
    expect(group6Module).toBeTruthy();
  });
});
