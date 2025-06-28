import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWindow } from './game-window';

describe('GameWindow', () => {
  let component: GameWindow;
  let fixture: ComponentFixture<GameWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameWindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameWindow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
