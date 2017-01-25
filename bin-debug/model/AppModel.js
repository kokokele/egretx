var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
var AppModel = (function (_super) {
    __extends(AppModel, _super);
    function AppModel() {
        return _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AppModel, "ins", {
        get: function () {
            if (!this._ins)
                this._ins = new AppModel;
            return this._ins;
        },
        enumerable: true,
        configurable: true
    });
    return AppModel;
}(bg.Model));
__decorate([
    bg.observable('AppModel-data-value'),
    __metadata("design:type", String)
], AppModel.prototype, "data", void 0);
__reflect(AppModel.prototype, "AppModel");
bg.Model.add(AppModel);
