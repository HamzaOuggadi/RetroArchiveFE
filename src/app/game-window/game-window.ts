import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-game-window',
  imports: [],
  templateUrl: './game-window.html',
  styleUrl: './game-window.css'
})
export class GameWindow implements AfterViewInit {

  ngAfterViewInit(): void {
    const ruffle = (window as any).RufflePlayer?.newest() ?? (window as any).RufflePlayer?.createPlayer();
    const container = document.getElementById("game-container");

    if (container && ruffle) {
      container.innerHTML = '';
      const player = ruffle.createPlayer();
      player.style.width = "1000px";
      player.style.height = "750px";
      container.appendChild(player);
      player.load("/games/Bloons.swf"); // replace with dynamic path if needed
    }
  }

}
