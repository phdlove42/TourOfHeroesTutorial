import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero-service/hero.service';
import { Router } from '@angular/router-deprecated';


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
    
    constructor(
    private router: Router,
    private heroService: HeroService) { }
    
    onSelect(hero: Hero){
        this.selectedHero = hero;
    }
    
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
 }