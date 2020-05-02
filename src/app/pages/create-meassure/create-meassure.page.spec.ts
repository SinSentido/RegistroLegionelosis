import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateMeassurePage } from './create-meassure.page';

describe('CreateMeassurePage', () => {
  let component: CreateMeassurePage;
  let fixture: ComponentFixture<CreateMeassurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMeassurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateMeassurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
