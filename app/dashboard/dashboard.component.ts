import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero-service/hero.service';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-dashboard',
    templateUrl: `app/template/dashboard-template.html`
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    
    constructor(private heroService: HeroService, private router: Router) {
        
    }
    
    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }
    
    goToDetail(hero: Hero) {
        let link = ['HeroDetail', {id: hero.id}];
        this.router.navigate(link)
    }
}