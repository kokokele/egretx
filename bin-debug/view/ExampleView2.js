var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExampleView2 = (function (_super) {
    __extends(ExampleView2, _super);
    function ExampleView2() {
        var _this = _super.call(this) || this;
        _this.skinName = 'Example2';
        _this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            ex.App.popScene();
        }, _this);
        return _this;
    }
    ExampleView2.prototype.onAddStage = function () {
        console.log('ExampleView2 onAdd--');
    };
    return ExampleView2;
}(ex.View));
__reflect(ExampleView2.prototype, "ExampleView2");
//# sourceMappingURL=ExampleView2.js.map