"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by marc on 17/08/16.
 */
const core_1 = require("@angular/core");
const mock_heroes_1 = require("./mock-heroes");
let HeroService = class HeroService {
    getHeroes() {
        return Promise.resolve(mock_heroes_1.HEROES);
    }
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise(resolve => setTimeout(() => resolve(mock_heroes_1.HEROES), 2000) // 2 seconds
        );
    }
    getHero(id) {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
};
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=hero.service.js.map