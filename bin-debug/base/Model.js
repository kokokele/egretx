var bg;
(function (bg) {
    //装饰数据对象
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
})(bg || (bg = {}));
//# sourceMappingURL=Model.js.map