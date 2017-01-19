namespace bg {
    export class SceneManage extends egret.DisplayObjectContainer {
    
    private _viewStack:eui.ViewStack;
    private _views:Array<any>;
    
    private static _ins:SceneManage;
    
    constructor(){
        super();
        
        this._viewStack = new eui.ViewStack();
        this._views = [];
    }
    
    public static get ins(){
        if(this._ins == null) {
            this._ins = new SceneManage();
        }
        return this._ins;
    }
    
    public getContainer():egret.DisplayObjectContainer{
        return this._viewStack;
    }
    
    
    public push(view:egret.DisplayObject){
        if(view) {
            this._viewStack.addChild(view);
            this._views.push(view);
            this._viewStack.selectedIndex = this._viewStack.length - 1;
        }
    }
    
    public pop(){
        if(this._views.length > 0) {
            let view  = this._views.pop();
            this._viewStack.removeChild(view);
            this._viewStack.selectedIndex = this._viewStack.length - 1;
            view = null;
        }
    }
    
    public pushRoot(view:egret.DisplayObject){
        this.clearAll();
        this.push(view);
        this._viewStack.selectedIndex = 0;
    }
    
    public addPopup(view:egret.DisplayObject){
        this.getCurrentScene().addChild(view);
    }
    
    public removePopup(view:egret.DisplayObject) {
        if(view && this.getCurrentScene().contains(view)) {
            this.getCurrentScene().removeChild(view);
        }
    }
    
    public getCurrentScene():egret.DisplayObjectContainer{
        return this._viewStack.selectedChild as egret.DisplayObjectContainer;
    }
    
    public clearAll(){
        this._viewStack.removeChildren();
        this._views = [];
    }
        
}
}

