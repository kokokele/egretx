var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ExampleView = (function (_super) {
    __extends(ExampleView, _super);
    function ExampleView() {
        var _this = _super.call(this) || this;
        _this.skinName = 'Example';
        return _this;
    }
    ExampleView.prototype.onAdd = function () {
        this.bind('AppModel.data', function (e) {
            console.log(e.obj);
        });
        console.log('ExampleView onAdd--');
    };
    ExampleView.prototype.onRemove = function () {
        console.log('ExampleView onRemove');
    };
    return ExampleView;
}(bg.Scene));
__reflect(ExampleView.prototype, "ExampleView");
//# sourceMappingURL=ExampleView.js.map