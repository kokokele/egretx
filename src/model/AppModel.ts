class AppModel extends bg.Model{

    @bg.observable('AppModel-data-value')
    data:string;

   

    private static _ins:AppModel;

    static get ins(){
       if(!this._ins) this._ins = new AppModel;
       return this._ins;    
    }
}

bg.Model.add(AppModel);
