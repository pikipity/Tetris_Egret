class GameScene extends eui.Component{
    private changeState:number = -1;

    private scoreValue:eui.Label;
    private return_btn:eui.Button;
    private gameArea:eui.Group;


    public checkState():number{
        return this.changeState;
    }
    
    public constructor(){
        super();
        this.skinName = "resource/eui_skins/game_screen.exml";
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginTouch, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.endTouch, this);
        this.return_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.endTouchReturn, this);
    }

    public updateScore(newScore:number){
        this.scoreValue.text = String(newScore);
    }

    public getKeyBord(){
        return this.pressedButton
    }
    public cleanKeyBord(){
        this.pressedButton = 0;
    }

    private endTouchReturn(evt: egret.TouchEvent){
        this.changeState = 0;
    }

    private pressedButton = 0; //0:none,1:up,2:left,3:right,4:down
    private pressMove = [[0,0], [0,0]];
    private beginTouch(evt: egret.TouchEvent){
        this.pressMove[0][0]=evt.stageX;
        this.pressMove[0][1]=evt.stageY;
    }
    private endTouch(evt: egret.TouchEvent){
        this.pressMove[1][0]=evt.stageX;
        this.pressMove[1][1]=evt.stageY;
        let disX = this.pressMove[1][0] - this.pressMove[0][0];
        let disY = this.pressMove[1][1] - this.pressMove[0][1];
        if(Math.max(Math.abs(disY),Math.abs(disX))>50){
            if(Math.abs(disY)>Math.abs(disX)){
                if(disY>0){
                    this.pressedButton = 4;
                }else{
                    this.pressedButton = 1;
                }
            }else{
                if(disX>0){
                    this.pressedButton = 3;
                }else{
                    this.pressedButton = 2;
                }
            }
        }
    }

}