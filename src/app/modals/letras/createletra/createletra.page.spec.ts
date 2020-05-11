import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateletraPage } from './createletra.page';

describe('CreateletraPage', () => {
  let component: CreateletraPage;
  let fixture: ComponentFixture<CreateletraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateletraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateletraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
