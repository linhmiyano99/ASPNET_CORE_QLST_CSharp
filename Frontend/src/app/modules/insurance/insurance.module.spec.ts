import { InsuranceModule } from './insurance.module';

describe('InsuranceModule', () => {
  let insuranceModule: InsuranceModule;

  beforeEach(() => {
    insuranceModule = new InsuranceModule();
  });

  it('should create an instance', () => {
    expect(insuranceModule).toBeTruthy();
  });
});
