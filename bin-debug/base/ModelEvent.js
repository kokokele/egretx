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
    var ModelEvent = (function (_super) {
        __extends(ModelEvent, _super);
        function ModelEvent(type, obj, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            var _this = _super.call(this, type, bubbles, cancelable) || this;
            _this.obj = obj;
            return _this;
        }
        /**
         * 克隆副本
         * @param obj
         * @returns {lcp.LEvent}
         */
        ModelEvent.prototype.clone = function (obj) {
            return new ModelEvent(this.type, obj ? obj : this.obj, this.bubbles, this.cancelable);
        };
        /**
         * 类输出
         */
        ModelEvent.prototype.toString = function () {
            console.log('ModelEvent', "type", "bubbles", "cancelable");
        };
        Object.defineProperty(ModelEvent.prototype, "param", {
            /**
             * 获取传参,
             * @returns {Object}
             */
            get: function () {
                return this.obj;
            },
            enumerable: true,
            configurable: true
        });
        return ModelEvent;
    }(egret.Event));
    bg.ModelEvent = ModelEvent;
    __reflect(ModelEvent.prototype, "bg.ModelEvent");
})(bg || (bg = {}));
//# sourceMappingURL=ModelEvent.js.map