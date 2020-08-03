import { SuggestRentCarModule } from './suggest-rent-car.module';

describe('SuggestRentCarModule', () => {
  let suggestRentCarModule: SuggestRentCarModule;

  beforeEach(() => {
    suggestRentCarModule = new SuggestRentCarModule();
  });

  it('should create an instance', () => {
    expect(suggestRentCarModule).toBeTruthy();
  });
});
