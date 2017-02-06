namespace bg {
    
    /**
     * @file 装饰数据对象
     * @author zhangpeng53
     */
    export function observable(defaultVal: any) {
        
        return function (target: Object, key) {
            let _val:any = defaultVal;
            const evtType:string = target['constructor']['name'] + '.' + key;
            
            Object.defineProperty(target, key, { set: function(val) {
                MessageCenter.fire(new ModelEvent(evtType, val));
                _val = val;
            }, get: () => {
                return _val;
            }
        });

        }
    }

    /**
     * @file 注入对象
     * @param propsType 注入对象类型
     */
    export function inject(propsType: any) {

        const typeName = propsType['name'];
        
        return function (target: Object, key) {

            const evtType:string = target['constructor']['name'] + '.' + key;
            
            Object.defineProperty(target, key, { set: function(val) {
               throw new Error('你不能给注入对象' + key + '赋值');
            }, get: () => {
                return Model.getModel(typeName);
            }
        });

        }
    } 

    /**
     * @file 数据模型
     */
    export class Model {

        private static modelMap = {};
        private static classMap = {};
         
        constructor() {
        }

        public static add(mclass:any) {
            const clName = mclass['name'];
            if(this.modelMap[clName]) return;
            this.classMap[clName] = mclass;
        }

        public static getModel(modelClassName:string):Model {
            if(this.modelMap[modelClassName]) return this.modelMap[modelClassName];
            const cl:any = this.classMap[modelClassName]; 
            if(cl) {
                //依赖时初始化对象
                const m = new cl();
                this.modelMap[modelClassName] = m;
                return m;
            } 
            else return null;
        }
    }

    // export function fire(type:string) {
    //     return function (taget:any, key:string, descriptor:TypedPropertyDescriptor<any>){
    //         let oldSet = descriptor.set;
    //         descriptor.set = function(val){
    //             // console.log('1111');
    //             oldSet.call(null, val);
    //             // console.log('2222');
    //         }
    //     }
    // }
 
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