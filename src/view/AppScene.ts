class AppScene extends bg.Scene {
    constructor() {
        super();
        this.skinName = 'Example';
    }

    protected onAdd() {
        this.bind('AppModel.data', (e) => {
            console.log(e.obj);
            
        })
        console.log('ExampleView onAdd--');
        
    }

    protected onRemove() {
        console.log('ExampleView onRemove');
    }
}