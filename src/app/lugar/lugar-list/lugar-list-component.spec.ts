import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {LugarListComponent} from './lugar-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {LugarService} from '../lugar.service';
import {Lugar} from '../lugar';

describe('LugarListComponent', () => {
    let component: LugarListComponent;
    let fixture: ComponentFixture<LugarListComponent>;
    const lugares: Lugar[] = require('../../../assets/lugares.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, LugarService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LugarListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of lugares', () => {
        component.lugares = lugares;
        expect(component.lugares.length).toEqual(lugares.length);
    });

    it('a author should be a author (first and last)', () => {
        component.lugares = lugares;
        expect(component.lugares[0].nombre).toEqual(lugares[0].nombre);
        expect(component.lugares[lugares.length - 1].nombre).toEqual(lugares[lugares.length - 1].nombre);
    });
});