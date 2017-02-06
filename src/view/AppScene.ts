class AppScene extends bg.Scene {

    public addScore:eui.Button;
    public changeStage:eui.Button;
    public score:eui.Label;
    public getDataBtn:eui.Button;


    @bg.inject(AppModel)
    appM:AppModel;

    constructor() {
        super();
        this.skinName = 'Example';
        
        this.on('AppModel.score', (e) => {
            this.score.text = e.obj + '';
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