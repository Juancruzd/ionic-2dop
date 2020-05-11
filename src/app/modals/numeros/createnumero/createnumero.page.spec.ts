import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatenumeroPage } from './createnumero.page';

describe('CreatenumeroPage', () => {
  let component: CreatenumeroPage;
  let fixture: ComponentFixture<CreatenumeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenumeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatenumeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
