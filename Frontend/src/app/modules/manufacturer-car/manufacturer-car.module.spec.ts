import { ManufacturerCarModule } from './manufacturer-car.module';

describe('MaintainCarNotifyModule', () => {
  let manufacturerCarNotifyModule: ManufacturerCarModule;

  beforeEach(() => {
    manufacturerCarNotifyModule = new ManufacturerCarModule();
  });

  it('should create an instance', () => {
    expect(manufacturerCarNotifyModule).toBeTruthy();
  });
});
