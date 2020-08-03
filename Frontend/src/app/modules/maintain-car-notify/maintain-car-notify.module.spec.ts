import { MaintainCarNotifyModule } from './maintain-car-notify.module';

describe('MaintainCarNotifyModule', () => {
  let maintainCarNotifyModule: MaintainCarNotifyModule;

  beforeEach(() => {
    maintainCarNotifyModule = new MaintainCarNotifyModule();
  });

  it('should create an instance', () => {
    expect(maintainCarNotifyModule).toBeTruthy();
  });
});
