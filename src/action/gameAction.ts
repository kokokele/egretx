class GameAction extends ex.Action {

   
   
   protected run(){
       ex.App.pushScene(ExampleView2);
   }
    
}

ex.Action.add(GameAction);