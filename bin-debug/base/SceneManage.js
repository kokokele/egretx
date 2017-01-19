/*
* @file 场景管理器
* @author zhangpeng53
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bg;
(function (bg) {
    var SceneManage = (function (_super) {
        __extends(SceneManage, _super);
        function SceneManage() {
            var _this = _super.call(this) || this;
            _this._viewStack = new eui.ViewStack();
            _this._views = [];
            return _this;
        }
        Object.defineProperty(SceneManage, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new SceneManage();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        SceneManage.prototype.getContainer = function () {
            return this._viewStack;
        };
        SceneManage.prototype.push = function (view) {
            if (view) {
                this._viewStack.addChild(view);
                this._views.push(view);
                this._viewStack.selectedIndex = this._viewStack.length - 1;
            }
        };
        SceneManage.prototype.pop = function () {
            if (this._views.length > 0) {
                var view = this._views.pop();
                this._viewStack.removeChild(view);
                this._viewStack.selectedIndex = this._viewStack.length - 1;
                view = null;
            }
        };
        SceneManage.prototype.pushRoot = function (view) {
            this.clearAll();
            this.push(view);
            this._viewStack.selectedIndex = 0;
        };
        SceneManage.prototype.addPopup = function (view) {
            this.getCurrentScene().addChild(view);
        };
        SceneManage.prototype.removePopup = function (view) {
            if (view && this.getCurrentScene().contains(view)) {
                this.getCurrentScene().removeChild(view);
            }
        };
        SceneManage.prototype.getCurrentScene = function () {
            return this._viewStack.selectedChild;
        };
        SceneManage.prototype.clearAll = function () {
            this._viewStack.removeChildren();
            this._views = [];
        };
        return SceneManage;
    }(egret.DisplayObjectContainer));
    bg.SceneManage = SceneManage;
    __reflect(SceneManage.prototype, "bg.SceneManage");
})(bg || (bg = {}));
//# sourceMappingURL=SceneManage.js.map