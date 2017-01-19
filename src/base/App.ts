namespace bg{
    export const MessageCenter = new Emitter();
        
    export class App {
        private _root:egret.DisplayObjectContainer;

        private static _ins:App;

        public static get ins(){
            if(this._ins == null) {
                this._ins = new App();
            }
            return this._ins;
        }
        
        public init(root:egret.DisplayObjectContainer){
            this._root = root;
            this._root.addChild(SceneManage.ins.getContainer());
        }

        

        public showView(viewName:string) {
            const cls:any = egret.getDefinitionByName(viewName);
            if(!cls) throw new Error("找不到view类：" + viewName);

            const view:bg.Scene = new cls();
            view.show();

        }
        
    }
}