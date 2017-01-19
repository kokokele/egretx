var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bg;
(function (bg) {
    bg.MessageCenter = new bg.Emitter();
    var App = (function () {
        function App() {
            this._sm = bg.SceneManage.ins;
        }
        Object.defineProperty(App, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new App();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        App.prototype.init = function (root) {
            this._root = root;
            this._root.addChild(bg.SceneManage.ins.getContainer());
        };
        App.prototype.pushScene = function (sceneName) {
            if (this._currentSceneName && this._currentSceneName == sceneName)
                return;
            this._sm.push(this.getScene(sceneName));
        };
        App.prototype.pushSceneToRoot = function (sceneName) {
            this._sm.pushRoot(this.getScene(sceneName));
        };
        App.prototype.popScene = function () {
            this._currentSceneName = '';
            this._sm.pop();
        };
        App.prototype.getScene = function (sceneName) {
            this._currentSceneName = sceneName;
            var cls = egret.getDefinitionByName(sceneName);
            if (!cls)
                throw new Error("找不到Scene类：" + sceneName);
            var view = new cls();
            return view;
        };
        return App;
    }());
    bg.App = App;
    __reflect(App.prototype, "bg.App");
})(bg || (bg = {}));
//# sourceMappingURL=App.js.map