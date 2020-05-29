import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageMeassuresPage } from './manage-meassures.page';

describe('ManageMeassuresPage', () => {
  let component: ManageMeassuresPage;
  let fixture: ComponentFixture<ManageMeassuresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMeassuresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageMeassuresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
