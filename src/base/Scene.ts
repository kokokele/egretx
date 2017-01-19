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
        
        public bind(type:string, callback:Function){
            MessageCenter.add(type, callback, this);
            this._evtPoll[type] = callback;
        }
        
        public unbind(type:string, callback:Function) {
            MessageCenter.remove(type, callback, this);
        }
        
        public unbindAll(){
            for(var key in this._evtPoll) {
                this.unbind(key, this._evtPoll[key]);
            }
        }
            
        protected onAdd(){
            
        }
        
        protected onRemove(){
            
        }
        
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

