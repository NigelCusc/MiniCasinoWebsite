import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppCookiesService } from '../../services/app-cookies.service';
import { GameMockClient, Game } from "../../shared";
import { ThumbComponent } from "../thumb/thumb.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  ids: string[];
  gamesData$: Observable<Game[]>;

  constructor(gameMockClient: GameMockClient, appCookiesService:AppCookiesService) {
    this.ids = appCookiesService.GetLastFiveCookie();
    this.gamesData$ = gameMockClient.getGameByIds$(this.ids);
  }

  ngOnInit(): void {
  }

}
