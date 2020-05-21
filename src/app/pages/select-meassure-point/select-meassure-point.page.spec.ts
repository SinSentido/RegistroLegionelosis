import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectMeassurePointPage } from './select-meassure-point.page';

describe('SelectMeassurePointPage', () => {
  let component: SelectMeassurePointPage;
  let fixture: ComponentFixture<SelectMeassurePointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMeassurePointPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectMeassurePointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
