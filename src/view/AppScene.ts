class AppScene extends bg.Scene {
    constructor() {
        super();
        this.skinName = 'Example';
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