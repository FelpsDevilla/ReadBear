import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabConfigPage } from './tab-config.page';

describe('TabConfigPage', () => {
  let component: TabConfigPage;
  let fixture: ComponentFixture<TabConfigPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(TabConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
