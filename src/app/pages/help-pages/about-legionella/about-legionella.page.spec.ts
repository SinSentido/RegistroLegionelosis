import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutLegionellaPage } from './about-legionella.page';

describe('AboutLegionellaPage', () => {
  let component: AboutLegionellaPage;
  let fixture: ComponentFixture<AboutLegionellaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLegionellaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutLegionellaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
