import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddStatusPage } from './add-status.page';

describe('AddStatusPage', () => {
  let component: AddStatusPage;
  let fixture: ComponentFixture<AddStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
