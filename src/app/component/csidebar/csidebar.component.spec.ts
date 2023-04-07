import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsidebarComponent } from './csidebar.component';

describe('CsidebarComponent', () => {
  let component: CsidebarComponent;
  let fixture: ComponentFixture<CsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
