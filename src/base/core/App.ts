

namespace bg{

    /**
     * 全局事件广播
     */
    export const MessageCenter = new Emitter();
    

    /*
    * @file 应用类
    * @author zhangpeng53
    */
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
        
        /**
         * 初始化场景
         */
        public init(root:egret.DisplayObjectContainer){
            this._root = root;
            this._root.addChild(SceneManage.ins.getContainer());
        }
        
        /**
         * 显示场景
         */
        public pushScene(sceneName:string) {
            if(this._currentSceneName && this._currentSceneName == sceneName) return;
            this._sm.push(this.getScene(sceneName));
        }

        /**
         * 将场景在最外层展示
         */
        public pushSceneToRoot(sceneName:string) {
            this._sm.pushRoot(this.getScene(sceneName));
        }

        /**
         * 移除顶部场景
         */
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