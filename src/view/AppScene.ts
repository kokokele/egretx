class AppScene extends bg.Scene {

    public addScore:eui.Button;
    public changeStage:eui.Button;
    public score:eui.Label;
    public getDataBtn:eui.Button;
    public toastBtn:eui.Button;

    @bg.inject(AppModel)
    appM:AppModel;

    constructor() {
        super();
        this.skinName = 'Example';
        
        this.on('AppModel.score', (e) => {
            // this.score.text = e.obj + '';
            // console.log(this)
        })

        this.addScore.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            this.appM.score += 1;            
        }, this);

        this.changeStage.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            bg.Action.do(GameAction);
        }, this);

        this.getDataBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            bg.Action.do(GetDataAction);
        }, this)

        bg.Toast.setTextStyle({size:30, textColor:0xFF00bb});

        this.toastBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            bg.Toast.show('我是 toast');
        }, this)
    }

    // @bg.observer('AppModel.score')
    // private onScoreChaneg(val) {
    //     // console.log(val, this);
    //     console.log(this)

    //     // this.score.text = val + '';
    // }


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