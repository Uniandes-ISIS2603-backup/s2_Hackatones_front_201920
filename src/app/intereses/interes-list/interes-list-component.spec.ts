import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {InteresListComponent} from './interes-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {InteresService} from '../interes.service';
import {Interes} from '../interes';

describe('InteresListComponent', () => {
    let component: InteresListComponent;
    let fixture: ComponentFixture<InteresListComponent>;
    const intereses: Interes[] = require('../../../assets/intereses.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, InteresService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InteresListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of intereses', () => {
        component.lista_intereses = intereses;
        expect(component.lista_intereses.length).toEqual(intereses.length);
    });

    it('a interes should be a interes (first and last)', () => {
        component.lista_intereses = intereses;
        expect(component.lista_intereses[0].nombre).toEqual(intereses[0].nombre);
        expect(component.lista_intereses[intereses.length - 1].nombre).toEqual(intereses[intereses.length - 1].nombre);
    });
});