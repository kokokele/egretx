class AppModel {

    @bg.observable('AppModel-data-value')
    data:string;

    @bg.observable(0)
    score:number;

   

    private static _ins:AppModel;

    static get ins(){
       if(!this._ins) this._ins = new AppModel;
       return this._ins;    
    }
}

bg.Model.add(AppModel);
