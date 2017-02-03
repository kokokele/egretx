class ExampleView2 extends bg.View {
    constructor() {
        super();
        this.skinName = 'Example2';
    }

    protected onAddStage() {
        console.log('ExampleView2 onAdd--');
    }
}