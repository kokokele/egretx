class GetDataAction extends ex.Action {

    @ex.inject(AppModel)
    public m:AppModel;

    protected run() {
        ex.fetch().then(function(obj){
            console.log('obj:', obj);
            
        }).catch(() => {
            console.log('post error');
            
        })
    }
}

ex.Action.add(GetDataAction);