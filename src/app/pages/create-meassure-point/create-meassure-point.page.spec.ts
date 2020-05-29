import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateMeassurePointPage } from './create-meassure-point.page';

describe('CreateMeassurePointPage', () => {
  let component: CreateMeassurePointPage;
  let fixture: ComponentFixture<CreateMeassurePointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMeassurePointPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateMeassurePointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
