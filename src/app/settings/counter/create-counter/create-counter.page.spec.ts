import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCounterPage } from './create-counter.page';

describe('CreateCounterPage', () => {
  let component: CreateCounterPage;
  let fixture: ComponentFixture<CreateCounterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCounterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
