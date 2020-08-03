import { RepairCarModule } from './repair-car.module';

describe('RepairCarModule', () => {
  let repairCarModule: RepairCarModule;

  beforeEach(() => {
    repairCarModule = new RepairCarModule();
  });

  it('should create an instance', () => {
    expect(repairCarModule).toBeTruthy();
  });
});
