namespace bg {
    
/**
 * @file 消息提示ui
 * @author zhangpeng53
 * @example Toast.show('我是提示信息');
 */
export class Toast extends egret.DisplayObjectContainer{
    
    /**
     * 设置背景图片
     */
    public static setBg(txtrToastBg:egret.Texture ):void{
        this._txtrToastBg = txtrToastBg;
    }
    
    public static show( msg:string ):void{
        const container = SceneManage.ins.getCurrentScene();
        var toast:Toast = new Toast( msg, container.stage.stageWidth, container.stage.stageHeight );
        container.addChild( toast );
    }

    private static _txtrToastBg:egret.Texture;

    constructor ( msg:string, w:number, h:number ){
        super();
        
        var bg:egret.Bitmap = new egret.Bitmap( Toast._txtrToastBg );
        this.addChild( bg );
        
        var tx:egret.TextField = new egret.TextField;
        tx.multiline = true;
        tx.size = 20;
        tx.bold = true;
        tx.textColor = 0xFFFFFF;
        tx.stroke = 2;
        tx.strokeColor = 0;
        tx.text = msg;
        tx.fontFamily = "微软雅黑";
        tx.textAlign = egret.HorizontalAlign.CENTER;
        tx.width = w * .84;
        if(Toast._txtrToastBg) tx.x = ( Toast._txtrToastBg.textureWidth - tx.width ) / 2;
        tx.y = 50;
        this.addChild( tx );
        
        bg.height = 12 + tx.height;

        this.anchorOffsetX = this.width * .5;
        this.anchorOffsetY = this.height * .5;
        this.x = w * .5 ;
        // this.y = h * .618;
        
        this.alpha = 0;
        
        egret.Tween.get( this )
            .to( { alpha: 1 }, 800, egret.Ease.quintOut )
            //.to( { scaleX: 1.2, scaleY: 1.2 }, 100, egret.Ease.quintOut )
            //.call( ()=>{ console.log( "tween tween tween" ); } ) 
            //.to( { scaleX: 1.0, scaleY: 1.0 }, 300, egret.Ease.quintIn )
            .wait( 1600 )
            .to( { alpha: 0 }, 1200, egret.Ease.quintIn  ).call( ()=>{      /*  y: this.y - 50, */
            if( this.parent ){
                this.parent.removeChild( this );
            }
        } );
    }
}
}