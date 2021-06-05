class GameScene extends eui.Component{
    private changeState:number = -1;
    private gameArea:eui.Group;

    //game data
    /*
    private fillMatrix: number[][];
    private moveMatrix: number[][];
    private nextMoveMatrix: number[][];
    private rowNum = 16;
    private colNum = 10;
    private blockWidth = 60;
    private score: number;
    private start_pos = [[0,3],
                         [0,3],
                         [0,3],
                         [0,3],
                         [0,4]];
    private block_pos = [[0,0],[0,1],[0,2],[0,3],
                         [0,1],[1,0],[1,1],[1,2],
                         [0,0],[1,0],[1,1],[1,2],
                         [0,0],[0,1],[0,2],[1,0],
                         [0,0],[0,1],[1,0],[1,1]];
    */
    private rowNum = 16;
    private colNum = 10;
    private blockWidth = 60;
    private score: number;
    private currentBlock;
    private nextBlock;
    private newBlockFlag: boolean;
    private start_pos = [[3*60,-1*60],
                         [3*60,-2*60],
                         [3*60,-2*60],
                         [3*60,-2*60],
                         [3*60,-2*60]];



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
        this.score = 10;
        this.currentBlock = new MoveBlock(0,0);
        this.nextBlock = new DisplayNextBlock(Math.floor(Math.random() * 4) + 1,Math.floor(Math.random() * 3));
        this.newBlockFlag = true;
        this.updateScore(this.score);
        //add ground
        let gameAareaMask = new egret.Rectangle(0,0,this.gameArea.width,this.gameArea.height);
        this.gameArea.mask = gameAareaMask;
        //this.gameArea.addChild(new MoveBlock(2,3)) //for test
        for(let i=0;i<this.colNum;i++){
            let tmp = new FilledBlock(0,0);
            tmp.moveBlock(i*60,this.gameArea.height)
            this.gameArea.addChild(tmp)
        }
        //add init display blocks
        this.gameArea.addChildAt(new MoveBlock(0,0),0);
        this.next_display.addChild(new DisplayNextBlock(0,0))
    }

    private next_display:eui.Group;
    private UpdateDisplayNextBlock(){
        this.next_display.removeChildAt(0)
        this.nextBlock.anchorOffsetX = this.nextBlock.width / 2.0;
        this.nextBlock.anchorOffsetY = this.nextBlock.height / 2.0;
        this.nextBlock.x = this.next_display.width / 2.0;
        this.nextBlock.y = this.next_display.height / 2.0;
        let maxEdge = Math.max(this.nextBlock.width,this.nextBlock.height);
        let scale = this.next_display.width / maxEdge;
        this.nextBlock.scaleX = scale;
        this.nextBlock.scaleY = scale;
        this.next_display.addChild(this.nextBlock)
    }

    private scoreValue:eui.Label;
    private updateScore(newScore:number){
        this.scoreValue.text = String(newScore);
    }
    public getScore(){
        return this.score;
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
    private getKeyBord(){
        return this.pressedButton
    }
    private cleanKeyBord(){
        this.pressedButton = 0;
    }

    private UpdateDisplayRunBlock(runX:number, runY:number){
        this.gameArea.removeChildAt(0);
        this.currentBlock.moveBlock(runX,runY);
        this.gameArea.addChildAt(this.currentBlock,0);
    }

    private getChildBlockLoc(parentX:number,parentY:number,parentAnchorOffX:number,parentAnchorOffY:number,parentAngle:number,
                             childX:number,childY:number){
        let tmp = this.rotationTransform(parentAnchorOffX,parentAnchorOffY,parentAngle);
        let parentAnchorX = parentX-tmp[0];
        let parentAnchorY = parentY-tmp[1];
        tmp = this.rotationTransform(childX,childY,parentAngle);
        let childX1 = parentAnchorX + tmp[0];
        let childY1 = parentAnchorY + tmp[1];
        tmp = this.rotationTransform(0,60,parentAngle);
        let childX2 = childX1 + tmp[0];
        let childY2 = childY1 + tmp[1];
        tmp = this.rotationTransform(60,60,parentAngle);
        let childX3 = childX1 + tmp[0];
        let childY3 = childY1 + tmp[1];
        tmp = this.rotationTransform(60,0,parentAngle);
        let childX4 = childX1 + tmp[0];
        let childY4 = childY1 + tmp[1];
        let resX = Math.min(childX1,childX2,childX3,childX4);
        let resY = Math.min(childY1,childY2,childY3,childY4);
        return [resX,resY]
    }

    private CheckTouchBottom(pseudoBlock:MoveBlock){
        let touchBottomFlag = false;
        for(let pseudoBlockElementNum = 0; pseudoBlockElementNum < pseudoBlock.numChildren; pseudoBlockElementNum++){
            let pseudoBlockElement = pseudoBlock.getChildAt(pseudoBlockElementNum);
            let pseudoBlockElementLoc = this.getChildBlockLoc(pseudoBlock.x,pseudoBlock.y,pseudoBlock.anchorOffsetX,pseudoBlock.anchorOffsetY,pseudoBlock.getAngle(),pseudoBlockElement.x,pseudoBlockElement.y);
            //console.log(pseudoBlockElementLoc)
            for(let gameAreaElementNum = 1; gameAreaElementNum < this.gameArea.numChildren; gameAreaElementNum++){
                let gameAreaElement = this.gameArea.getChildAt(gameAreaElementNum);
                let downElementList = gameAreaElement.$children;
                for(let downElementNum = 0; downElementNum < downElementList.length; downElementNum++){
                    let downElement = downElementList[downElementNum];
                    let downElementLoc = this.getChildBlockLoc(gameAreaElement.x,gameAreaElement.y,gameAreaElement.anchorOffsetX,gameAreaElement.anchorOffsetY,Math.round(gameAreaElement.rotation/90),downElement.x,downElement.y);
                    //console.log(downElementLoc)
                    if(pseudoBlockElementLoc[0]==downElementLoc[0] && pseudoBlockElementLoc[1]==downElementLoc[1]){
                        touchBottomFlag = true;
                        return touchBottomFlag;
                    }
                }
            }
        }
        return touchBottomFlag;
    }

    private rotationTransform(px,py,angle){
        return [Math.round(px*Math.cos(angle*Math.PI/2)-py*Math.sin(angle*Math.PI/2)),
                Math.round(px*Math.sin(angle*Math.PI/2)+py*Math.cos(angle*Math.PI/2))]
    }


    //main update logic
    private preMoveFrame = 0;
    private maxPreMoveFrame = 30*1;
    public onestep(){
        //get key bord
        let pressedButton = this.getKeyBord();
        //game logic
        if(this.newBlockFlag){
            //create new block
            this.currentBlock = new MoveBlock(this.nextBlock.getBlockNum(),this.nextBlock.getAngle());
            this.nextBlock = new DisplayNextBlock(Math.floor(Math.random() * 4) + 1,Math.floor(Math.random() * 3));
            this.newBlockFlag = false;
            this.UpdateDisplayRunBlock(Math.floor((60*5-this.currentBlock.currentWidth/2)/60)*60,-this.currentBlock.currentHeight);
            if(this.CheckTouchBottom(this.currentBlock)){
                this.changeState = 2;
            }else{
                this.UpdateDisplayNextBlock();
            }
            this.preMoveFrame = 0;
            this.maxPreMoveFrame = 30*0.5
        }else if(this.preMoveFrame > this.maxPreMoveFrame || pressedButton != 0){
            //block move    0:none,1:up,2:left,3:right,4:down
            if(pressedButton == 0){
                let pseudoBlock = new MoveBlock(this.currentBlock.getBlockNum(),this.currentBlock.getAngle());
                pseudoBlock.moveBlock(this.currentBlock.x + 0,this.currentBlock.y + 60);
                if(this.CheckTouchBottom(pseudoBlock)){
                    this.gameArea.removeChildAt(0);
                    let newFillBlock = new FilledBlock(this.currentBlock.getBlockNum(),this.currentBlock.getAngle());
                    newFillBlock.moveBlock(this.currentBlock.x,this.currentBlock.y);
                    this.gameArea.addChild(newFillBlock);
                    this.newBlockFlag = true;
                    this.preMoveFrame = 0;
                    this.maxPreMoveFrame = 30*0.3
                }else{
                    this.UpdateDisplayRunBlock(0,60)
                    this.preMoveFrame = 0;
                    this.maxPreMoveFrame = 30*0.5
                }
            }
        }
        //clean key bord
        this.cleanKeyBord();
        //add frame
        this.preMoveFrame++;
    }

}