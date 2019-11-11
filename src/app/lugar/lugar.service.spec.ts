import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Lugar} from './lugar';
import {LugarService} from './lugar.service';
import {AppModule} from '../app.module';


describe('Service: LugarService', () => {
    let injector: TestBed;
    let service: LugarService;
    const lugares: Lugar[] = require('../../assets/lugares.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, LugarService]
        });
        injector = getTestBed();
        service = injector.get(LugarService);
    });
    
    it('#getLugares should return value from observable',
    (done: DoneFn) => {
    service.getLugares().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
    it('#getLugarDetail should return an existing lugar',
    (done: DoneFn) => {
    service.getLugaresDetail(lugares[0].identificador).subscribe(value => {
        expect(value.nombre).toEqual(lugares[0].nombre);
        done();
        });
    });
	
	it('#createLugar should return the lugar created',
    (done: DoneFn) => {
    service.createLugar(lugares[0]).subscribe(value => {
        expect(value.nombre).toEqual(lugares[0].nombre);
        done();
        });
    });
	
	it('#updateAuthor should return the author updated',
    (done: DoneFn) => {
	service.createLugar(lugares[0]).subscribe(value => {});
    service.updateLugar(lugares[0]).subscribe(value => {
        expect(value.nombre).toEqual(lugares[0].nombre);
        done();
        });
    });
    
});