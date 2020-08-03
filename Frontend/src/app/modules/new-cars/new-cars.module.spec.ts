import { NewCarsModule } from './new-cars.module';

describe('NewCarsModule', () => {
  let newCarsModule: NewCarsModule;

  beforeEach(() => {
    newCarsModule = new NewCarsModule();
  });

  it('should create an instance', () => {
    expect(newCarsModule).toBeTruthy();
  });
});
