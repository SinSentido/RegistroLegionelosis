import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectCompaniePage } from './select-companie.page';

describe('SelectCompaniePage', () => {
  let component: SelectCompaniePage;
  let fixture: ComponentFixture<SelectCompaniePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCompaniePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCompaniePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
