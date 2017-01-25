class GameAction extends bg.Action {

   @bg.inject(AppModel)
   public m:AppModel;
   
   protected run(){
       bg.App.ins.pushScene('ExampleView2');
       console.log(this.m.data);
   }
    
}

bg.Action.add(GameAction);