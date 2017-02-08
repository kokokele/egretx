class AppModel {

    @bg.observable('AppModel-data-value')
    data:string;

    @bg.observable(0)
    score:number;
}

bg.Model.add(AppModel);
