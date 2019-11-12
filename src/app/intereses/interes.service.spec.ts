import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Interes} from './interes';
import {InteresService} from './interes.service';
import {AppModule} from '../app.module';


describe('Service: InteresService', () => {
    let injector: TestBed;
    let service: InteresService;
    const intereses: Interes[] = require('../../assets/intereses.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, InteresService]
        });
        injector = getTestBed();
        service = injector.get(InteresService);
    });
    
    it('#getIntereses should return value from observable',
    (done: DoneFn) => {
    service.getIntereses().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
    it('#getInteresDetail should return an existing interes',
    (done: DoneFn) => {
    service.getInteresDetail(intereses[0].id).subscribe(value => {
        expect(value.nombre).toEqual(intereses[0].nombre);
        done();
        });
    });
	
	it('#createInteres should return the interes created',
    (done: DoneFn) => {
    service.createInteres(intereses[0]).subscribe(value => {
        expect(value.nombre).toEqual(intereses[0].nombre);
        done();
        });
    });
	
	it('#updateInteres should return the interes updated',
    (done: DoneFn) => {
	service.createInteres(intereses[0]).subscribe(value => {});
    service.updateInteres(intereses[0]).subscribe(value => {
        expect(value.nombre).toEqual(intereses[0].nombre);
        done();
        });
    });
    
});