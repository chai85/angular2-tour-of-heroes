import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component ({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
            <div>
                <label>ID: </label>
                {{hero.id}}
            </div>
            <div>
                <label>Name: </label>
                <input type='text' [(ngModel)]='hero.name' placeholder='name'>
            </div>
        </div>
    `,
    inputs: ['hero']
})

export class HeroDetailComponent{

    public hero: Hero;
}
