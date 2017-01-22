class GameAction extends bg.Action {
   constructor() {
       super();
   }
   
   protected run(){
       console.log('gameAction run');
       bg.App.ins.pushScene('ExampleView2');
       AppModel.ins.data = 'onBtnClick------data';
   }
}

new GameAction();