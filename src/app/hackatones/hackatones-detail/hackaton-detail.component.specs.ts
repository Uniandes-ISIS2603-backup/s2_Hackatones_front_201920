import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {HackatonDetailComponent} from './hackaton-detail.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {HackatonService} from '../hackatones.service';
import {Hackaton} from '../hackatones';

describe('HackatonDetailComponent', () => {
    let component: HackatonDetailComponent;
    let fixture: ComponentFixture<HackatonDetailComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                HackatonService,
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
        fixture = TestBed.createComponent(HackatonDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});