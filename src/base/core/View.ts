namespace bg {

    /*
    * @file View基础类
    * @author zhangpeng53
    */
    export class View extends eui.Component {
        
        private _evtPoll:Object;

        constructor(){
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this._onAdd, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this._onRemove, this);
            this._evtPoll = {};
        }
        
        /**
         * 监听数据改变
         */
        public on(type:string, callback:Function){
            MessageCenter.add(type, callback, this);
            this._evtPoll[type] = callback;
        }
        
        /**
         * 移除数据改变监听
         */
        public cancel(type:string, callback:Function) {
            MessageCenter.remove(type, callback, this);
        }
        
        /**
         * 移除全部数据监听
         */
        public cancelAll(){
            for(var key in this._evtPoll) {
                this.cancel(key, this._evtPoll[key]);
            }
        }

        /**
         * 当scene添加到舞台调用
         */    
        protected onAddStage(){
            
        }
        
        /**
         * 当scene移除后调用
         */
        protected onRemoveStage(){
            
        }
        
        //---------------------------
        private _onAdd(e){
            this.onAddStage();
        }
        
        private _onRemove(e){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this._onAdd, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this._onRemove, this);
            this.cancelAll();
            this.onRemoveStage();
        }
    }
}

