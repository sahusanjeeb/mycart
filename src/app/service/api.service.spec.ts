import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let http: HttpClient;
  let httpController: HttpTestingController;
  let httpSpy: {get: jasmine.Spy};
  
  beforeEach(() => {
    httpSpy =jasmine.createSpyObj('HttpClient', ['getProduct']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService,
      {Provide: HttpClient, useValue: httpSpy}]
    });
    apiService = TestBed.inject(ApiService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(apiService).toBeDefined();
  });
});
