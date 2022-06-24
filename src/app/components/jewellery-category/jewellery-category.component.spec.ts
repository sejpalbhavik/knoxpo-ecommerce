import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelleryCategoryComponent } from './jewellery-category.component';

describe('JewelleryCategoryComponent', () => {
  let component: JewelleryCategoryComponent;
  let fixture: ComponentFixture<JewelleryCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelleryCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelleryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
