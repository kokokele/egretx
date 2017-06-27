class AppModel {

    @ex.observable('AppModel-data-value')
    data:string;

    @ex.observable(0)
    score:number;
}

ex.Model.add(AppModel);
