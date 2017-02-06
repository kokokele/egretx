class GetDataAction extends bg.Action {

    @bg.inject(AppModel)
    public m:AppModel;

    protected run() {
        bg.fetch().then(function(obj){
            console.log('obj:', obj);
            
        }).catch(() => {
            console.log('post error');
            
        })
    }
}

bg.Action.add(GetDataAction);