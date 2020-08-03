import { RoadPriceModule } from './road-price.module';

describe('RoadPriceModule', () => {
  let roadPriceModule: RoadPriceModule;

  beforeEach(() => {
    roadPriceModule = new RoadPriceModule();
  });

  it('should create an instance', () => {
    expect(roadPriceModule).toBeTruthy();
  });
});
