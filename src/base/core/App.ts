

namespace bg{

    /**
     * 全局事件广播
     */
    export const MessageCenter = new Emitter();
    

    /*
    * @file 应用类
    * @author zhangpeng53
    */
    class Application {
        private _root:egret.DisplayObjectContainer;
        private _currentSceneName;

        /**
         * 初始化场景
         */
        public init(root:egret.DisplayObjectContainer){
            this._root = root;
            this._root.addChild(SceneManage.getContainer());
        }
        
        /**
         * 显示场景
         */
        public pushScene(sceneClass:any) {
            // if(this._currentSceneName && this._currentSceneName == sceneClass) return;
            console.log('sceeeeeeeeeamy');
            
            SceneManage.push(this.getScene(sceneClass));
        }

        /**
         * 将场景在最外层展示
         */
        public pushSceneToRoot(sceneName:string) {
            SceneManage.pushRoot(this.getScene(sceneName));
        }

        /**
         * 移除顶部场景
         */
        public popScene() {
            this._currentSceneName = '';
            SceneManage.pop();
        }

        private getScene(sceneClass:any):Scene {
            this._currentSceneName = sceneClass;
            if(!sceneClass) throw new Error("找不到Scene类");
            const view:bg.Scene = new sceneClass();
            return view;
        }
        
    }

    export const App = new Application();
}