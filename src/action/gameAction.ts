class GameAction extends bg.Action {

   
   
   protected run(){
       bg.App.pushScene(ExampleView2);
   }
    
}

bg.Action.add(GameAction);