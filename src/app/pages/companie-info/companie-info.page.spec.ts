import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanieInfoPage } from './companie-info.page';

describe('CompanieInfoPage', () => {
  let component: CompanieInfoPage;
  let fixture: ComponentFixture<CompanieInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanieInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanieInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
