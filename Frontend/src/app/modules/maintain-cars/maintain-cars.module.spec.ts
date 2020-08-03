import { MaintainCarsModule } from './maintain-cars.module';

describe('MaintainCarsModule', () => {
    let maintainCarsModule: MaintainCarsModule;

    beforeEach(() => {
        maintainCarsModule = new MaintainCarsModule();
    });

    it('should create an instance', () => {
        expect(maintainCarsModule).toBeTruthy();
    });
});
