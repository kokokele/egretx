namespace bg{
    export const MessageCenter = new Emitter();
        
    export class App {
        private _root:egret.DisplayObjectContainer;

        private static _ins:App;
        private _sm:SceneManage = SceneManage.ins;
        private _currentSceneName;


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
        

        public pushScene(sceneName:string) {
            if(this._currentSceneName && this._currentSceneName == sceneName) return;
            this._sm.push(this.getScene(sceneName));
        }

        public pushSceneToRoot(sceneName:string) {
            this._sm.pushRoot(this.getScene(sceneName));
        }

        public popScene() {
            this._currentSceneName = '';
            this._sm.pop();
        }

        private getScene(sceneName:string):Scene {
            this._currentSceneName = sceneName;
            const cls:any = egret.getDefinitionByName(sceneName);
            if(!cls) throw new Error("找不到Scene类：" + sceneName);
            const view:bg.Scene = new cls();
            return view;
        }
        
    }
}