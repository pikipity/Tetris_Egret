class StartScene extends eui.Component{
    private start_button:eui.Button;
    private changeState:number = -1;
    

    public constructor(){
        super();
        this.skinName = "resource/eui_skins/start_screen.exml";
        this.start_button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnTouchHandler,this);
    }

    private btnTouchHandler(event:egret.TouchEvent):void {
        this.changeState = 1;
    }

    public checkState():number{
        return this.changeState;
    }

}