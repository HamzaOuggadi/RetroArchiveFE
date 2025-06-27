import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveList } from './archive-list';

describe('ArchiveList', () => {
  let component: ArchiveList;
  let fixture: ComponentFixture<ArchiveList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
