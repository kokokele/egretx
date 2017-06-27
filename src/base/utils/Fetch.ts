namespace ex {
    

    const url:string = 'http://www.baidu.com';
    
    export function fetch(postData?:any){

            const p: Promise<string> = new Promise (
            (resolve, reject) => {

                var request = new egret.HttpRequest();
                request.responseType = egret.HttpResponseType.TEXT;
                request.open(url, egret.HttpMethod.POST);
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                if(postData) request.send(postData);
                else request.send();

                request.addEventListener(egret.Event.COMPLETE,(event:egret.Event)=>{
                    var request = <egret.HttpRequest>event.currentTarget;
                    resolve(JSON.parse(request.response));
                },this);
                request.addEventListener(egret.IOErrorEvent.IO_ERROR, (event:egret.IOErrorEvent)=>{
                    reject();
                },this);
            }
        );

        return p;

    }
    
}