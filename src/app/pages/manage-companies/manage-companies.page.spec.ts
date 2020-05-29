import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageCompaniesPage } from './manage-companies.page';

describe('ManageCompaniesPage', () => {
  let component: ManageCompaniesPage;
  let fixture: ComponentFixture<ManageCompaniesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCompaniesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageCompaniesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
