namespace bg {
    
/**
 * @file 消息提示ui
 * @author zhangpeng53
 * @example Toast.show('我是提示信息');
 */
export class Toast extends egret.DisplayObjectContainer{
    private static _txtrToastBg:egret.Texture;

private static _txtStyle:Object = {a: 1};
    /**
     * 设置背景图片
     */
    public static setBg(txtrToastBg:egret.Texture ):void{
        this._txtrToastBg = txtrToastBg;
    }

    /**
     * 设置文本样式
     * @param style {
     *  size, bold, textColor, stroke, strokeColor, fontFamily
     * }
     */
    public static setTextStyle(style:any):void {
        this._txtStyle = style;
    }
    
    public static show( msg:string ):void{
        var toast:Toast = new Toast( msg);
        const container = SceneManage.getCurrentScene();
        container.addChild( toast );
    }


    constructor ( msg:string){
        super();
        
        const container = SceneManage.getCurrentScene();
        const w = container.stage.stageWidth;
        const h = container.stage.stageHeight;
        var bg:egret.Bitmap = new egret.Bitmap( Toast._txtrToastBg );
        this.addChild( bg );
        
        const style = Toast._txtStyle;
        var tx:egret.TextField = new egret.TextField;
        tx.multiline = true;
        tx.size = style['size'] || 20;
        tx.bold = style['bold'] || true;
        tx.textColor = style['textColor'] || 0xFFFFFF;
        tx.stroke = style['stroke'] || 2;
        tx.strokeColor = style['stokeColor'] || 0;
        tx.fontFamily = style['fontFamily'] || "微软雅黑";

        tx.textAlign = egret.HorizontalAlign.CENTER;
        tx.width = w * .84;
        tx.text = msg;
        if(Toast._txtrToastBg) tx.x = ( Toast._txtrToastBg.textureWidth - tx.width ) / 2;
        tx.y = 200;
        this.addChild( tx );
        
        bg.height = 12 + tx.height;

        this.anchorOffsetX = this.width * .5;
        this.anchorOffsetY = this.height * .5;
        this.x = w * .5 ;
        // this.y = h * .618;
        
        this.alpha = 0;
        
        egret.Tween.get( this )
            .to( { alpha: 1 }, 100, egret.Ease.quintOut )
            //.to( { scaleX: 1.2, scaleY: 1.2 }, 100, egret.Ease.quintOut )
            //.call( ()=>{ console.log( "tween tween tween" ); } ) 
            //.to( { scaleX: 1.0, scaleY: 1.0 }, 300, egret.Ease.quintIn )
            .to({y: -150}, 300)
            .wait( 1000 )
            .to( { alpha: 0 }, 500, egret.Ease.quintIn  ).call( ()=>{      /*  y: this.y - 50, */
            if( this.parent ){
                this.parent.removeChild( this );
            }
        } );
    }
}
}