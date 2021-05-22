import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class UiPackageService {
    constructor() { }
}
UiPackageService.ɵfac = function UiPackageService_Factory(t) { return new (t || UiPackageService)(); };
UiPackageService.ɵprov = ɵɵdefineInjectable({ token: UiPackageService, factory: UiPackageService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(UiPackageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class UiPackageComponent {
    constructor() { }
    ngOnInit() {
    }
}
UiPackageComponent.ɵfac = function UiPackageComponent_Factory(t) { return new (t || UiPackageComponent)(); };
UiPackageComponent.ɵcmp = ɵɵdefineComponent({ type: UiPackageComponent, selectors: [["lib-ui-package"]], decls: 2, vars: 0, template: function UiPackageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " ui-package works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(UiPackageComponent, [{
        type: Component,
        args: [{
                selector: 'lib-ui-package',
                template: `
    <p>
      ui-package works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class TestComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponentComponent.ɵfac = function TestComponentComponent_Factory(t) { return new (t || TestComponentComponent)(); };
TestComponentComponent.ɵcmp = ɵɵdefineComponent({ type: TestComponentComponent, selectors: [["lib-test-component"]], decls: 2, vars: 0, template: function TestComponentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "test-component works!");
        ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TestComponentComponent, [{
        type: Component,
        args: [{
                selector: 'lib-test-component',
                templateUrl: './test-component.component.html',
                styleUrls: ['./test-component.component.css']
            }]
    }], function () { return []; }, null); })();

class UiPackageModule {
}
UiPackageModule.ɵfac = function UiPackageModule_Factory(t) { return new (t || UiPackageModule)(); };
UiPackageModule.ɵmod = ɵɵdefineNgModule({ type: UiPackageModule });
UiPackageModule.ɵinj = ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(UiPackageModule, { declarations: [UiPackageComponent,
        TestComponentComponent], exports: [UiPackageComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(UiPackageModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    UiPackageComponent,
                    TestComponentComponent
                ],
                imports: [],
                exports: [
                    UiPackageComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ui-package
 */

/**
 * Generated bundle index. Do not edit.
 */

export { UiPackageComponent, UiPackageModule, UiPackageService };
//# sourceMappingURL=ui-package.js.map
