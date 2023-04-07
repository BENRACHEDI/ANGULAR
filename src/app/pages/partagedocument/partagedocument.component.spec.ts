import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartagedocumentComponent } from './partagedocument.component';

describe('PartagedocumentComponent', () => {
  let component: PartagedocumentComponent;
  let fixture: ComponentFixture<PartagedocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartagedocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartagedocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
