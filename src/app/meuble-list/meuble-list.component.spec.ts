import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeubleListComponent } from './meuble-list.component';

describe('MeubleListComponent', () => {
  let component: MeubleListComponent;
  let fixture: ComponentFixture<MeubleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeubleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeubleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
