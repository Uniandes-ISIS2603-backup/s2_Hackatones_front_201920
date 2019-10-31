import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Hackaton} from './hackatones';
import {HackatonService} from './hackatones.service';
import {AppModule} from '../app.module';


describe('Service: HackatonService', () => {
    let injector: TestBed;
    let service: HackatonService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, HackatonService]
        });
        injector = getTestBed();
        service = injector.get(HackatonService);
    });
    
    it('#getHackatones should return value from observable',
    (done: DoneFn) => {
    service.getHackatones().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
});