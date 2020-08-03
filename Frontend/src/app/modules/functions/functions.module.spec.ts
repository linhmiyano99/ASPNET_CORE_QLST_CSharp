import { FunctionsModule } from './functions.module';

describe('FunctionsModule', () => {
  let functionsModule: FunctionsModule;

  beforeEach(() => {
    functionsModule = new FunctionsModule();
  });

  it('should create an instance', () => {
    expect(functionsModule).toBeTruthy();
  });
});
