var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AppModel = (function () {
    function AppModel() {
    }
    return AppModel;
}());
__decorate([
    ex.observable('AppModel-data-value'),
    __metadata("design:type", String)
], AppModel.prototype, "data", void 0);
__decorate([
    ex.observable(0),
    __metadata("design:type", Number)
], AppModel.prototype, "score", void 0);
__reflect(AppModel.prototype, "AppModel");
ex.Model.add(AppModel);
//# sourceMappingURL=AppModel.js.map