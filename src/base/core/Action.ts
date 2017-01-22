namespace bg {

/**
 * @file action础类
 * @author zhangpeng53
 */
export class Action {
    
    private static actionMap:Object = {};
    
    constructor() {
        Action.add(this);
    }

    private static add(ac:Action) {
        const cn =  ac["__proto__"]["__class__"];
        this.actionMap[cn] = ac;
    }

    /**
     * 需要子类覆盖实现
     */
    protected run() {
        console.log('需要子类实现run（）');
    }

    /**
     * 触发action
     * @param action类名
     */
    public static do(actionClassName:string) {
        const action = this.actionMap[actionClassName];
        if(action) {
            action.run();
        }
    }

}
}

