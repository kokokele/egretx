var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bg;
(function (bg) {
    var Emitter = (function () {
        function Emitter() {
            this._el = new egret.EventDispatcher();
        }
        Object.defineProperty(Emitter, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new Emitter();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 注册全局侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         * @param priority
         */
        Emitter.prototype.add = function (type, listener, thisObject, useCapture, priority) {
            if (useCapture === void 0) { useCapture = false; }
            if (priority === void 0) { priority = 0; }
            this._el.addEventListener(type, listener, thisObject, useCapture, priority);
        };
        /**
         * 移除全局侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         */
        Emitter.prototype.remove = function (type, listener, thisObject, useCapture) {
            if (useCapture === void 0) { useCapture = false; }
            this._el.removeEventListener(type, listener, thisObject, useCapture);
        };
        /**
         * 判断是否有全局侦听
         * @param type
         * @returns {boolean}
         */
        Emitter.prototype.has = function (type) {
            return this._el.hasEventListener(type);
        };
        /**
         * 检查是否用此 EventDispatcher 对象或其任何始祖为指定事件类型注册了全局事件侦听器
         * @param type
         * @returns {boolean}
         */
        Emitter.prototype.willTrigger = function (type) {
            return this._el.willTrigger(type);
        };
        /**
         * 派发全局事件
         * @param event
         * @returns {boolean}
         */
        Emitter.prototype.fire = function (event) {
            return this._el.dispatchEvent(event);
        };
        /**
         * 类名
         * @returns {string}
         */
        Emitter.prototype.toString = function () {
            return this._el.toString();
        };
        return Emitter;
    }());
    bg.Emitter = Emitter;
    __reflect(Emitter.prototype, "bg.Emitter");
})(bg || (bg = {}));
//# sourceMappingURL=Emitter.js.map