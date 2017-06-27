class ExampleView2 extends ex.View {
    public backBtn:eui.Button;

    constructor() {
        super();
        this.skinName = 'Example2';

        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e) => {
            ex.App.popScene();
        }, this)
    }

    protected onAddStage() {
        console.log('ExampleView2 onAdd--');
    }
}