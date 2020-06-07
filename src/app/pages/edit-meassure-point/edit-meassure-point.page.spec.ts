import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMeassurePointPage } from './edit-meassure-point.page';

describe('EditMeassurePointPage', () => {
  let component: EditMeassurePointPage;
  let fixture: ComponentFixture<EditMeassurePointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMeassurePointPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMeassurePointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
