import { Group4Module } from './group4.module';

describe('Group4Module', () => {
    let group4Module: Group4Module;

    beforeEach(() => {
        group4Module = new Group4Module();
    });

    it('should create an instance', () => {
        expect(group4Module).toBeTruthy();
    });
});
