class FinishScene extends eui.Component{
    private changeState:number = -1;
    private scoreValue_finish: eui.Label;

    public checkState():number{
        return this.changeState;
    }
    
    public constructor(score:number){
        super();
        this.skinName = "resource/eui_skins/finish.exml";
        this.scoreValue_finish.text = String(score);
        this.new_game_button.addEventListener(egret.TouchEvent.TOUCH_END, this.endTouchReturn, this);
    }

    private new_game_button:eui.Button;
    private endTouchReturn(evt: egret.TouchEvent){
        this.changeState = 0;
    }

    

}