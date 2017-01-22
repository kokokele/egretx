namespace bg {
    
    //装饰数据对象
    export function observable(defaultVal: any) {
        
        return function (target: Object, key) {
            let _val:any = defaultVal;
            const evtType:string = target['constructor']['name'] + '.' + key;
            
            Object.defineProperty(target, key, { set: function(val) {
                // console.log("val:", val, evtType, target);
                MessageCenter.fire(new ModelEvent(evtType, val));
                _val = val;
            }, get: () => {
                return _val;
            }
        });

        }
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
}