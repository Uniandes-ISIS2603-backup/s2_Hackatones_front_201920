import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {InteresDetailComponent} from './interes-detail.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {InteresService} from '../interes.service';
import {Interes} from '../interes';

describe('InteresDetailComponent', () => {
    let component: InteresDetailComponent;
    let fixture: ComponentFixture<InteresDetailComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                InteresService,
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
        fixture = TestBed.createComponent(InteresDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});