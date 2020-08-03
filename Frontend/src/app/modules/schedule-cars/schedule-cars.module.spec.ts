import { ScheduleCarsModule } from "./schedule-cars.module";

describe('ScheduleCarsModule', () => {
    let scheduleCarsModule: ScheduleCarsModule;

    beforeEach(() => {
        scheduleCarsModule = new ScheduleCarsModule();
    });

    it('should create an instance', () => {
        expect(scheduleCarsModule).toBeTruthy();
    });
});
