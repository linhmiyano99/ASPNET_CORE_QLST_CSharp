import { DriversScheduleModule } from './drivers-schedule.module';

describe('DriversScheduleModule', () => {
    let module: DriversScheduleModule;

    beforeEach(() => {
        module = new DriversScheduleModule();
    });

    it('should create an instance', () => {
        expect(module).toBeTruthy();
    });
});
