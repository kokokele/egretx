var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bg;
(function (bg) {
    bg.MessageCenter = new bg.Emitter();
    var App = (function () {
        function App(root) {
            this._root = root;
            this._root.addChild(bg.SceneManage.ins.getContainer());
        }
        App.prototype.showView = function (viewName) {
            var cls = egret.getDefinitionByName(viewName);
            if (!cls)
                throw new Error("找不到view类：" + viewName);
            var view = new cls();
            view.show();
        };
        return App;
    }());
    bg.App = App;
    __reflect(App.prototype, "bg.App");
})(bg || (bg = {}));
//# sourceMappingURL=App.js.map