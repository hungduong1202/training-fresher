import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroSerive: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros() {
    this.heroSerive.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
