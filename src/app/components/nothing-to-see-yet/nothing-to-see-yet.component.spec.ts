import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NothingToSeeYetComponent } from './nothing-to-see-yet.component';

describe('NothingToSeeYetComponent', () => {
  let component: NothingToSeeYetComponent;
  let fixture: ComponentFixture<NothingToSeeYetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NothingToSeeYetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NothingToSeeYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
