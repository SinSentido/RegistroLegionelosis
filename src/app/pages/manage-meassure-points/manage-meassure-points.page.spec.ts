import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageMeassurePointsPage } from './manage-meassure-points.page';

describe('ManageMeassurePointsPage', () => {
  let component: ManageMeassurePointsPage;
  let fixture: ComponentFixture<ManageMeassurePointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMeassurePointsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageMeassurePointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
