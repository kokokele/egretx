## 简介
包括：数据绑定，事件机制，场景切换，工具类。

## 使用说明

- 入口文件：

main.ts 增加启动代码如下

```javascript
private createScene(){
        if(this.isThemeLoadEnd && this.isResourceLoadEnd){

            //启动代码
            bg.App.init(this); 
            bg.App.pushScene(AppScene); //AppScene是自定义主场景类
        }
    }
```

- 场景切换

直接使用 bg.App操作。

```javascript
        /**
         * 显示场景
         */
        public pushScene(sceneClass:any)

        /**
         * 将场景在最外层展示
         */
        public pushSceneToRoot(sceneName:string) 

        /**
         * 移除顶部场景
         */
        public popScene()
```

- 动作 Action
主要用于场景切换，加载数据等

如下代码：

```javascript
class GameAction extends bg.Action {

   
   
   protected run(){
       bg.App.pushScene(ExampleView2);
   }
    
}

//将 GameAction加入到 Action cache 中
bg.Action.add(GameAction);

```

执行 action ： 

```
bg.Action.do(GetDataAction);
```


## 数据绑定

```javascript
class AppModel {

    
    //监听数据 score，参数为 score 默认值
    @bg.observable(0)
    score:number;

}

//将 AppModel 加入到 Model cache 中，用于依赖注入
bg.Model.add(AppModel);

```

使用数据：

```javascript
class AppScene extends bg.Scene {

    public addScore:eui.Button;
    public changeStage:eui.Button;
    public score:eui.Label;
    public getDataBtn:eui.Button;


    // 依赖注入 AppModel
    @bg.inject(AppModel)
    appM:AppModel;

    constructor() {
        super();
        this.skinName = 'Example';
        
        //监听数据改变
        this.on('AppModel.score', (e) => {
            this.score.text = e.obj + '';
        })

        this.addScore.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            //更改 AppModel 数据
            this.appM.score += 1;            
        }, this);

        this.changeStage.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            bg.Action.do(GameAction);
        }, this);

        this.getDataBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            bg.Action.do(GetDataAction);
        }, this)
    }


    protected onAddStage() {
        this.on('AppModel.data', (e) => {
            console.log("AppScene onAdd:", e.obj);
            
        })
        console.log('ExampleView onAdd--');
        
    }

    protected onRemoveStage() {
        console.log('ExampleView onRemove');
    }
}
```

## 组件使用
- Toast
消息提示

使用如下：

```javascript
//设置Toast全局文本样式， 只需设置一次
bg.Toast.setTextStyle({size:30, textColor:0xFF00bb});

//设置 Toast 全局背景图片，只需设置一次
bg.Toast.setBg(BGTexture);

this.toastBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
    //调用
    bg.Toast.show('我是 toast');
}, this)
```