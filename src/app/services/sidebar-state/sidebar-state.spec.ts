import { TestBed } from '@angular/core/testing';

import { SidebarService } from './sidebar-state.service';

describe('ActiveSidebarService', () => {
  let service: SidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
