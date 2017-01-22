/*
* @file 场景基础类, 需继承
* @author zhangpeng53
*/

namespace bg {

    export class Scene extends eui.Component {
        
        private _evtPoll:Object;
        protected _sm:SceneManage;

        constructor(){
            
            super();
            this._sm = SceneManage.ins;
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this._onAdd, this);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this._onRemove, this);
            
            this._evtPoll = {};
        }
        
        //监听数据改变
        public bind(type:string, callback:Function){
            MessageCenter.add(type, callback, this);
            this._evtPoll[type] = callback;
        }
        
        //移除数据改变监听
        public unbind(type:string, callback:Function) {
            MessageCenter.remove(type, callback, this);
        }
        
        //移除全部数据监听
        public unbindAll(){
            for(var key in this._evtPoll) {
                this.unbind(key, this._evtPoll[key]);
            }
        }

        //当scene添加到舞台调用    
        protected onAdd(){
            
        }
        
        //当scene移除后调用
        protected onRemove(){
            
        }
        
        //---------------------------
        private _onAdd(e){
            this.onAdd();
        }
        
        private _onRemove(e){
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this._onAdd, this);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this._onRemove, this);
            this.unbindAll();
            this.onRemove();
        }
    }
}

