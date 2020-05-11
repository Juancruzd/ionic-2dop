import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateletraPage } from './updateletra.page';

describe('UpdateletraPage', () => {
  let component: UpdateletraPage;
  let fixture: ComponentFixture<UpdateletraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateletraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateletraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
