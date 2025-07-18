import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Archive} from './main-layout/archive/archive';
import {ContactUs} from './contact-us/contact-us';
import {MainLayout} from './main-layout/main-layout';
import {ArchiveList} from './main-layout/archive-list/archive-list';
import {AdminPanel} from './admin-panel/admin-panel';
import {GameWindow} from './game-window/game-window';
import {Article} from './main-layout/article/article';

export const routes: Routes = [
  {path : "home", component : Home},
  {path : "", component : Home},
  {path : "archives", component : MainLayout, children : [
      {path : "", component : ArchiveList}, // variable with name of archives will be added later
      {path : "archive", component : Archive} // this will be used to display a specific archive, variable will be added later for the name of the archive
    ]},
  {path : "article", component : Article},
  {path : "contact", component : ContactUs},
  {path : "admin", component : AdminPanel},
  {path : "game", component : GameWindow}
];
