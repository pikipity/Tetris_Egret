class GameScene extends eui.Component{
    private changeState:number = -1;
    private gameArea:eui.Rect;
    private next_display:eui.Group;

    //game data
    private fillMatrix: number[][];
    private moveMatrix: number[][];
    private nextMoveMatrix: number[][];
    private rowNum = 16;
    private colNum = 10;
    private blockWidth = 60;
    private score: number;
    private currentBlock: number;
    private nextBlock: number;
    private newBlockFlag: boolean;


    public checkState():number{
        return this.changeState;
    }
    
    public constructor(){
        super();
        this.skinName = "resource/eui_skins/game_screen.exml";
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginTouch, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.endTouch, this);
        this.return_btn.addEventListener(egret.TouchEvent.TOUCH_END, this.endTouchReturn, this);
        //init game data
        this.score = 0;
        this.fillMatrix = [];
        for(let i=0;i<this.rowNum;i++){
            let tmp = [];
            for(let i=0;i<this.colNum;i++){
                tmp.push(0);
            }
            this.fillMatrix.push(tmp);
        }
        this.moveMatrix=this.fillMatrix;
        this.nextMoveMatrix=this.fillMatrix;
        this.currentBlock = Math.floor(Math.random() * 4) + 1;
        this.nextBlock = Math.floor(Math.random() * 4) + 1;
        this.newBlockFlag = true;
        this.updateScore(this.score);
    }

    private scoreValue:eui.Label;
    public updateScore(newScore:number){
        this.scoreValue.text = String(newScore);
    }

    
    private return_btn:eui.Button;
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
    public getKeyBord(){
        return this.pressedButton
    }
    public cleanKeyBord(){
        this.pressedButton = 0;
    }


    //main update logic
    public onestep(){
        //get key bord
        let pressedButton = this.getKeyBord();
        
        //clean key bord
        this.cleanKeyBord();
    }

}