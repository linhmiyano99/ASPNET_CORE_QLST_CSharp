import { ModelCarsModule } from './model-cars.module';

describe('ModelCarsModule', () => {
  let modelCarsModule: ModelCarsModule;

  beforeEach(() => {
    modelCarsModule = new ModelCarsModule();
  });

  it('should create an instance', () => {
    expect(modelCarsModule).toBeTruthy();
  });
});
