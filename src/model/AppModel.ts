class AppModel {

    @bg.observable('default value')
    data:string;

    private static _ins:AppModel;

    static get ins(){
       if(!this._ins) this._ins = new AppModel;
       return this._ins;    
    }

    constructor() {
        
    }
}