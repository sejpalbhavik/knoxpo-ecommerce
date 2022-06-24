import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsCategoryComponent } from './electronics-category.component';

describe('ElectronicsCategoryComponent', () => {
  let component: ElectronicsCategoryComponent;
  let fixture: ComponentFixture<ElectronicsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
