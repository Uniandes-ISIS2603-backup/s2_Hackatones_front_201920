import {InteresModule} from './interes.module';

describe('InteresModule', () => {
    let interesModule: InteresModule;

    beforeEach(() => {
        interesModule = new InteresModule();
    });

    it('should create an instance', () => {
        expect(interesModule).toBeTruthy();
    });
});