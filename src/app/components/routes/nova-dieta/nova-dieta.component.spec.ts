import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaDietaComponent } from './nova-dieta.component';

describe('NovaDietaComponent', () => {
  let component: NovaDietaComponent;
  let fixture: ComponentFixture<NovaDietaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaDietaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
