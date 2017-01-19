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
    var Dialog = (function (_super) {
        __extends(Dialog, _super);
        function Dialog() {
            var _this = _super.call(this) || this;
            _this.initPanel();
            return _this;
        }
        Dialog.prototype.show = function () {
            this.back();
            this._sm.addPopup(this._panel);
        };
        Dialog.prototype.hide = function () {
            this._sm.removePopup(this._panel);
            this._sm.getCurrentScene().removeChild(this._back);
            this._panel.removeEventListener(eui.UIEvent.CLOSING, this.onPanelClose, this);
            this._panel['ok'].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
        };
        Dialog.prototype.initSkin = function (viewName) {
            this.skinName = viewName;
            // const content = new eui.Component();
            // content.skinName = viewName;
            this._panel.addChild(this);
        };
        Object.defineProperty(Dialog.prototype, "title", {
            set: function (str) {
                this._panel.title = str;
            },
            enumerable: true,
            configurable: true
        });
        Dialog.prototype.initPanel = function () {
            this._panel = new eui.Panel();
            this._panel.skinName = 'MyPanelSkin';
            this._panel.verticalCenter = 0;
            this._panel.horizontalCenter = 0;
            this._panel.addEventListener(eui.UIEvent.CLOSING, this.onPanelClose, this);
            this._panel['ok'].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this);
        };
        Dialog.prototype.onOk = function (e) {
            this.dispatchEvent(e);
        };
        Dialog.prototype.onPanelClose = function (e) {
            this.hide();
        };
        Dialog.prototype.back = function () {
            var cs = this._sm.getCurrentScene();
            if (!this._back) {
                this._back = new egret.Sprite;
                this._back.touchEnabled = true;
                var b = this._back;
                b.graphics.beginFill(0x000, 0.6);
                b.graphics.drawRect(0, 0, cs.stage.stageWidth, cs.stage.stageHeight);
                b.graphics.endFill();
            }
            cs.addChild(this._back);
        };
        Dialog.prototype.hideBack = function () {
            if (this._back)
                this.removeChild(this._back);
        };
        return Dialog;
    }(bg.Scene));
    bg.Dialog = Dialog;
    __reflect(Dialog.prototype, "bg.Dialog");
})(bg || (bg = {}));
//# sourceMappingURL=Dialog.js.map