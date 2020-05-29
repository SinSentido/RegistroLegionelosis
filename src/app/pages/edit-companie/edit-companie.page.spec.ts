import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCompaniePage } from './edit-companie.page';

describe('EditCompaniePage', () => {
  let component: EditCompaniePage;
  let fixture: ComponentFixture<EditCompaniePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompaniePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCompaniePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
