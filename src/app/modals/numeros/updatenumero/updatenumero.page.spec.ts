import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatenumeroPage } from './updatenumero.page';

describe('UpdatenumeroPage', () => {
  let component: UpdatenumeroPage;
  let fixture: ComponentFixture<UpdatenumeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatenumeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatenumeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
