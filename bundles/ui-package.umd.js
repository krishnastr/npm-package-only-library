(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ui-package', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ui-package'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var UiPackageService = /** @class */ (function () {
        function UiPackageService() {
        }
        return UiPackageService;
    }());
    UiPackageService.ɵfac = function UiPackageService_Factory(t) { return new (t || UiPackageService)(); };
    UiPackageService.ɵprov = i0.ɵɵdefineInjectable({ token: UiPackageService, factory: UiPackageService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UiPackageService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var UiPackageComponent = /** @class */ (function () {
        function UiPackageComponent() {
        }
        UiPackageComponent.prototype.ngOnInit = function () {
        };
        return UiPackageComponent;
    }());
    UiPackageComponent.ɵfac = function UiPackageComponent_Factory(t) { return new (t || UiPackageComponent)(); };
    UiPackageComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UiPackageComponent, selectors: [["lib-ui-package"]], decls: 2, vars: 0, template: function UiPackageComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " ui-package works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UiPackageComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-ui-package',
                        template: "\n    <p>\n      ui-package works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var TestComponentComponent = /** @class */ (function () {
        function TestComponentComponent() {
        }
        TestComponentComponent.prototype.ngOnInit = function () {
        };
        return TestComponentComponent;
    }());
    TestComponentComponent.ɵfac = function TestComponentComponent_Factory(t) { return new (t || TestComponentComponent)(); };
    TestComponentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TestComponentComponent, selectors: [["lib-test-component"]], decls: 2, vars: 0, template: function TestComponentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "test-component works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TestComponentComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-test-component',
                        templateUrl: './test-component.component.html',
                        styleUrls: ['./test-component.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var UiPackageModule = /** @class */ (function () {
        function UiPackageModule() {
        }
        return UiPackageModule;
    }());
    UiPackageModule.ɵfac = function UiPackageModule_Factory(t) { return new (t || UiPackageModule)(); };
    UiPackageModule.ɵmod = i0.ɵɵdefineNgModule({ type: UiPackageModule });
    UiPackageModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(UiPackageModule, { declarations: [UiPackageComponent,
                TestComponentComponent], exports: [UiPackageComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UiPackageModule, [{
                type: i0.NgModule,
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
            }], null, null);
    })();

    /*
     * Public API Surface of ui-package
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.UiPackageComponent = UiPackageComponent;
    exports.UiPackageModule = UiPackageModule;
    exports.UiPackageService = UiPackageService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-package.umd.js.map
