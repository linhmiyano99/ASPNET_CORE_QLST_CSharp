import { RoadModule } from './road.module';

describe('RoadModule', () => {
  let roadModule: RoadModule;

  beforeEach(() => {
    roadModule = new RoadModule();
  });

  it('should create an instance', () => {
    expect(roadModule).toBeTruthy();
  });
});
