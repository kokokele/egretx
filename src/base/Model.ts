namespace bg {
    
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
    
    export function fireGet(type:string) {
        
        return function (taget:any, key:string, descriptor:TypedPropertyDescriptor<any>){
            let oldSet = descriptor.get;
           
        }
    }

  
    
    function fireBind(type:string) {
        return function (taget:any, key:string, descriptor:TypedPropertyDescriptor<any>){
            let oldSet = descriptor.set;
            descriptor.set = function(val){
                console.log('111111111')
                // MessageCenter.fire(new ModelEvent(type, val));
                oldSet.call(null, val);
            }
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
   
    export class BaseModel{

        test:String;

        constructor(){
            console.log('BaseModel constructor')
        }
    }
}