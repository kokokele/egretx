namespace ex {

/**
 * @file action础类
 * @author zhangpeng53
 */
export class Action {

    private static classMap:Object = {};
    private static actionMap:Object = {};
    

    public static add(cl:any) {
        const clName = cl['name'];
        this.classMap[clName] = cl;
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
    public static do(cl:any) {
        const clName = cl['name'];
        if(this.actionMap[clName]) {
            this.actionMap[clName]['run']();
        } else {
            const cls:any = this.classMap[clName];
            if(cls) {
                const ins:Action = new cls;
                ins.run();
                this.actionMap[clName] = ins;
            }
        }
       
    }

}
}

