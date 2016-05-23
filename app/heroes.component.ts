import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: './app/template/main-template.html',
    styleUrls: ["./styles.css"],
    directives: [HeroDetailComponent],
})

export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    
    public heroes: Hero[];
    
    ngOnInit() {
        this.getHeroes();
    }
    
    constructor(private heroService: HeroService){
        
    }
    
    onSelect(hero: Hero){
        this.selectedHero = hero;
    }
    
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
 }