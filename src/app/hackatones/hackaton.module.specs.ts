import {HackatonesModule} from './hackatones.module';

describe('HackatonModule', () => {
    let hackatonModule: HackatonesModule;

    beforeEach(() => {
        hackatonModule = new HackatonModule();
    });

    it('should create an instance', () => {
        expect(hackatonModule).toBeTruthy();
    });
});
