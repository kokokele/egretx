namespace bg {
    export class Dialog extends bg.Scene {
        
        public content:eui.Component;
        
        private _back:egret.Sprite;
        private _panel:eui.Panel;

        
        constructor(){
            super();
            this.initPanel();
        }
        
         public show(){
            this.back();
            this._sm.addPopup(this._panel);
        }
        
        public hide(){
            this._sm.removePopup(this._panel);
            this._sm.getCurrentScene().removeChild(this._back);
            
            this._panel.removeEventListener(eui.UIEvent.CLOSING, this.onPanelClose, this);            
            (this._panel['ok'] as eui.Button).removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this)
        }
        
         public initSkin(viewName:string){
            this.skinName = viewName;

            // const content = new eui.Component();
            // content.skinName = viewName;
            
            this._panel.addChild(this);
            
        }
        
        public set title(str:string) {
            this._panel.title = str;
        }
        
        private initPanel(){
            this._panel = new eui.Panel();
            this._panel.skinName = 'MyPanelSkin';
            this._panel.verticalCenter = 0;
            this._panel.horizontalCenter = 0;
            this._panel.addEventListener(eui.UIEvent.CLOSING, this.onPanelClose, this);
            (this._panel['ok'] as eui.Button).addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOk, this)
        }
        
        protected onOk(e:egret.TouchEvent){
            this.dispatchEvent(e);
        }
        
        private onPanelClose(e){
             this.hide();
        }
        
        private back(){
            
            const cs = this._sm.getCurrentScene();
            
            if(!this._back) {
                this._back = new egret.Sprite;
                this._back.touchEnabled = true;
                
                const b = this._back;
                b.graphics.beginFill(0x000, 0.6);
                b.graphics.drawRect(0, 0, cs.stage.stageWidth, cs.stage.stageHeight);
                b.graphics.endFill();
            }
            
             cs.addChild(this._back);
            
            
        }
        private hideBack(){
            if(this._back) this.removeChild(this._back);
        }
    }
}