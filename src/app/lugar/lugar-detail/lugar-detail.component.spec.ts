import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {LugarDetailComponent} from './lugar-detail.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {LugarService} from '../lugar.service';
import {Lugar} from '../lugar';

describe('LugarDetailComponent', () => {
    let component: LugarDetailComponent;
    let fixture: ComponentFixture<LugarDetailComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                LugarService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LugarDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});