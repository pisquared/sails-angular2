"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./components/app/app.component");
const app_routing_1 = require("./components/app/app.routing");
const heroes_component_1 = require("./components/heroes/heroes.component");
const hero_detail_component_1 = require("./components/hero-detail/hero-detail.component");
const dashboard_component_1 = require("./components/dashboard/dashboard.component");
const forms_1 = require("@angular/forms");
const hero_service_1 = require("./services/hero.service");
const multi_select_component_1 = require("./components/hero-detail/multi-select.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent,
            dashboard_component_1.DashboardComponent,
            multi_select_component_1.MultiSelectComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.AppRoutingModule
        ],
        providers: [
            hero_service_1.HeroService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map