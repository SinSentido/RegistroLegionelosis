import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCompaniePage } from './create-companie.page';

describe('CreateCompaniePage', () => {
  let component: CreateCompaniePage;
  let fixture: ComponentFixture<CreateCompaniePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCompaniePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCompaniePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
