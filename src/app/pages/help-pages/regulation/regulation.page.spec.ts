import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegulationPage } from './regulation.page';

describe('RegulationPage', () => {
  let component: RegulationPage;
  let fixture: ComponentFixture<RegulationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
