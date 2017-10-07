import { Component, Input } from '@angular/core';

@Component({
    selector: 'bullet',
    templateUrl: './bullet.component.html'
})
export class BulletComponent {

    @Input() items: Bullet[] = [];
        
    constructor() {
    }
}

export class Bullet {
    constructor(
        public title: string,
        public text: string,
    ){
    }
}