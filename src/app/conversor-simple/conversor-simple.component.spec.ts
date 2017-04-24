import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorSimpleComponent } from './conversor-simple.component';

describe('ConversorSimpleComponent', () => {
  let component: ConversorSimpleComponent;
  let fixture: ComponentFixture<ConversorSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversorSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('Tiene que dar 0', () => {
   let unConversor = new ConversorSimpleComponent();
   expect(unConversor.kilometros).toEqual(1);
       
  });

});
