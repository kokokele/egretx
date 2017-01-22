class AppEvent extends egret.Event {

    public constructor(type: string, public obj?: Object, bubbles: boolean = false, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
    }

    /**
     * 克隆副本
     * @param obj
     * @returns {lcp.LEvent}
     */
    public clone(obj?: Object): AppEvent {
        return new AppEvent(this.type, obj ? obj : this.obj, this.bubbles, this.cancelable);
    }

    /**
     * 类输出
     */
    public toString(): void {
        console.log('AppEvent', "type", "bubbles", "cancelable");
    }

    /**
     * 获取传参,
     * @returns {Object}
     */
    public get param(): Object {
        return this.obj;
    }

}

