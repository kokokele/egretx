var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bg;
(function (bg) {
    function observable(defaultVal) {
        return function (target, key) {
            var _val = defaultVal;
            var evtType = target['constructor']['name'] + '.' + key;
            Object.defineProperty(target, key, { set: function (val) {
                    // console.log("val:", val, evtType, target);
                    bg.MessageCenter.fire(new bg.ModelEvent(evtType, val));
                    _val = val;
                }, get: function () {
                    return _val;
                }
            });
        };
    }
    bg.observable = observable;
    function fireGet(type) {
        return function (taget, key, descriptor) {
            var oldSet = descriptor.get;
        };
    }
    bg.fireGet = fireGet;
    function fireBind(type) {
        return function (taget, key, descriptor) {
            var oldSet = descriptor.set;
            descriptor.set = function (val) {
                console.log('111111111');
                // MessageCenter.fire(new ModelEvent(type, val));
                oldSet.call(null, val);
            };
        };
    }
    // export function Relation(cls: any) {
    //     return function (target: Object, propertyKey) {
    //         var _val;
    //        Object.defineProperty(target, propertyKey, { set: function(val) { 
    //             //  console.log(old);
    //             //  old.call(target, val)
    //             _val = val;
    //            console.log("val:", val);
    //         }, get: () => {
    //             return _val;
    //         }
    //     });
    //     }
    // }
    // export function Relation2(cls: any): PropertyDecorator {
    //         return function () {
    //             console.log(cls);
    //         }
    //     }
    var BaseModel = (function () {
        function BaseModel() {
            console.log('BaseModel constructor');
        }
        return BaseModel;
    }());
    bg.BaseModel = BaseModel;
    __reflect(BaseModel.prototype, "bg.BaseModel");
})(bg || (bg = {}));
//# sourceMappingURL=Model.js.map