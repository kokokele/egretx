namespace ex {

    /** 
     * @file 触发器，事件广播使用
     * @author zhangpeng53
     * */   
    export class Emitter {
        private static _ins: Emitter;

        private _el: egret.EventDispatcher;

        constructor() {
            this._el = new egret.EventDispatcher();
        }

        public static get ins() {
            if (this._ins == null) {
                
                this._ins = new Emitter();
            }
            return this._ins;
        }

        /**
         * 注册全局侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         * @param priority
         */
        public add(type: string, listener: Function, thisObject: any, useCapture: boolean = false, priority: number = 0): void {
            this._el.addEventListener(type, listener, thisObject, useCapture, priority);
        }

        /**
         * 移除全局侦听
         * @param type
         * @param listener
         * @param thisObject
         * @param useCapture
         */
        public remove(type: string, listener: Function, thisObject: any, useCapture: boolean = false): void {
            this._el.removeEventListener(type, listener, thisObject, useCapture);
        }

        /**
         * 判断是否有全局侦听
         * @param type
         * @returns {boolean}
         */
        public has(type: string): boolean {
            return this._el.hasEventListener(type);
        }

        /**
         * 检查是否用此 EventDispatcher 对象或其任何始祖为指定事件类型注册了全局事件侦听器
         * @param type
         * @returns {boolean}
         */
        public willTrigger(type: string): boolean {
            return this._el.willTrigger(type);
        }

        /**
         * 派发全局事件
         * @param event
         * @returns {boolean}
         */
        public fire(event: egret.Event): boolean {
            return this._el.dispatchEvent(event);
        }

        /**
         * 类名
         * @returns {string}
         */
        public toString(): string {
            return this._el.toString();
        }
    }
}