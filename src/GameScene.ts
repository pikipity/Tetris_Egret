class GameScene extends eui.Component{
    private changeState:number = -1;
    private gameArea:eui.Group;
    private runArea:eui.Group;

    //game data
    private rowNum = 16;
    private colNum = 10;
    private blockWidth = 60;
    private score: number;
    private currentBlock;
    private nextBlock;
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
        this.currentBlock = new MoveBlock(0,0);
        this.nextBlock = new DisplayNextBlock(Math.floor(Math.random() * 5) + 1,Math.floor(Math.random() * 4));
        this.newBlockFlag = true;
        this.updateScore();
        //add ground
        let gameAareaMask = new egret.Rectangle(0,0,this.gameArea.width,this.gameArea.height);
        this.gameArea.mask = gameAareaMask;
        this.runArea.mask = gameAareaMask;
        //this.gameArea.addChild(new MoveBlock(2,3)) //for test
        for(let i=0;i<this.colNum;i++){
            let tmp = new FilledBlock(0,0);
            tmp.moveBlock(i*this.blockWidth,this.gameArea.height)
            this.gameArea.addChild(tmp)
        }
        //add init display blocks
        //this.runArea.addChildAt(new MoveBlock(0,0),0);
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
    private updateScore(){
        this.scoreValue.text = String(this.score);
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
        //this.runArea.removeChildAt(0);
        this.currentBlock.moveBlock(runX,runY);
        //this.runArea.addChildAt(this.currentBlock,0);
    }

    private UpdateDisplayRotationBlock(){
        //this.runArea.removeChildAt(0);
        this.rotationBlock(this.currentBlock);
        //this.runArea.addChildAt(this.currentBlock,0);
    }

    private getChildBlockLoc(parentX:number,parentY:number,parentAnchorOffX:number,parentAnchorOffY:number,parentAngle:number,
                             childX:number,childY:number){
        let tmp = this.rotationTransform(parentAnchorOffX,parentAnchorOffY,parentAngle);
        let parentAnchorX = parentX-tmp[0];
        let parentAnchorY = parentY-tmp[1];
        tmp = this.rotationTransform(childX,childY,parentAngle);
        let childX1 = parentAnchorX + tmp[0];
        let childY1 = parentAnchorY + tmp[1];
        tmp = this.rotationTransform(0,this.blockWidth,parentAngle);
        let childX2 = childX1 + tmp[0];
        let childY2 = childY1 + tmp[1];
        tmp = this.rotationTransform(this.blockWidth,this.blockWidth,parentAngle);
        let childX3 = childX1 + tmp[0];
        let childY3 = childY1 + tmp[1];
        tmp = this.rotationTransform(this.blockWidth,0,parentAngle);
        let childX4 = childX1 + tmp[0];
        let childY4 = childY1 + tmp[1];
        let resX = Math.min(childX1,childX2,childX3,childX4);
        let resY = Math.min(childY1,childY2,childY3,childY4);
        return [resX,resY]
    }

    private rotationBlock(block:MoveBlock){
        let selectBlockNum = 0;
        let centerX = block.width/2;
        let centerY = block.height/2;
        if(block.getBlockNum()>=1 && block.getBlockNum()<=4){
            let minDis = Math.pow(10,3);
            for(let i=0;i<block.numChildren;i++){
                let blockElement = block.getChildAt(i);
                let blockElementDis = Math.sqrt(Math.pow(blockElement.x-centerX,2)+Math.pow(blockElement.y-centerY,2));
                if(blockElementDis<minDis){
                    minDis = blockElementDis;
                    selectBlockNum = i;
                }
            }
        }else{
            return;
        }
        let element = block.getChildAt(selectBlockNum);
        let elementLoc = this.getChildBlockLoc(block.x,block.y,block.anchorOffsetX,block.anchorOffsetY,block.getAngle(),element.x,element.y);
        block.rotationBlock(1);
        element = block.getChildAt(selectBlockNum);
        let newElementLoc = this.getChildBlockLoc(block.x,block.y,block.anchorOffsetX,block.anchorOffsetY,block.getAngle(),element.x,element.y);
        block.moveBlock(elementLoc[0]-newElementLoc[0],elementLoc[1]-newElementLoc[1])
    }

    private CheckTouchBottom(pseudoBlock:MoveBlock){
        let touchBottomFlag = false;
        for(let pseudoBlockElementNum = 0; pseudoBlockElementNum < pseudoBlock.numChildren; pseudoBlockElementNum++){
            let pseudoBlockElement = pseudoBlock.getChildAt(pseudoBlockElementNum);
            let pseudoBlockElementLoc = this.getChildBlockLoc(pseudoBlock.x,pseudoBlock.y,pseudoBlock.anchorOffsetX,pseudoBlock.anchorOffsetY,pseudoBlock.getAngle(),pseudoBlockElement.x,pseudoBlockElement.y);
            //console.log(pseudoBlockElementLoc)
            for(let gameAreaElementNum = 0; gameAreaElementNum < this.gameArea.numChildren; gameAreaElementNum++){
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

    private CheckBottom(){
        //collect all element information
        let countElementNum = [];
        let elementLoc = [];
        for(let i=0;i<this.rowNum;i++){
            countElementNum.push(0);
            elementLoc.push([]);
        }
        for(let gameAreaElementNum = 0; gameAreaElementNum < this.gameArea.numChildren; gameAreaElementNum++){
            let gameAreaElement = this.gameArea.getChildAt(gameAreaElementNum);
            let selectRow = gameAreaElement.y/60;
            if(selectRow<this.rowNum && selectRow>=0){
                countElementNum[selectRow] += 1;
                elementLoc[selectRow].push(gameAreaElementNum);
            }
        }
        //remove and move
        let deletRow = [];
        for(let i=0;i<this.rowNum;i++){
            if(countElementNum[i]>=this.colNum){
                deletRow.push(i);
            }
        }
        return deletRow
    }

    private removeBottom(deletRow:number[]){
        for(let i=0;i<deletRow.length;i++){
            let selecteElementNum = 0;
            while(selecteElementNum<this.gameArea.numChildren){
                let selectElement = this.gameArea.getChildAt(selecteElementNum);
                if(selectElement.y==deletRow[i]*this.blockWidth){
                    this.gameArea.removeChild(selectElement)
                }else{
                    selecteElementNum++;
                }
            }
        }
    }

    private moveBottom(deletRow:number[]){
        for(let i=0;i<deletRow.length;i++){
            let selecteElementNum = 0;
            while(selecteElementNum<this.gameArea.numChildren){
                let selectElement = this.gameArea.getChildAt(selecteElementNum);
                if(selectElement.y<deletRow[i]*this.blockWidth){
                    selectElement.y += this.blockWidth
                }
                selecteElementNum++;
            }
        }
    }

    private CheckLeftBound(pseudoBlock:MoveBlock){
        let touchBottomFlag = false;
        for(let pseudoBlockElementNum = 0; pseudoBlockElementNum < pseudoBlock.numChildren; pseudoBlockElementNum++){
            let pseudoBlockElement = pseudoBlock.getChildAt(pseudoBlockElementNum);
            let pseudoBlockElementLoc = this.getChildBlockLoc(pseudoBlock.x,pseudoBlock.y,pseudoBlock.anchorOffsetX,pseudoBlock.anchorOffsetY,pseudoBlock.getAngle(),pseudoBlockElement.x,pseudoBlockElement.y);
            if(pseudoBlockElementLoc[0]<0){
                touchBottomFlag = true;
                return touchBottomFlag;
            }
        }
        return touchBottomFlag;
    }

    private CheckRightBound(pseudoBlock:MoveBlock){
        let touchBottomFlag = false;
        for(let pseudoBlockElementNum = 0; pseudoBlockElementNum < pseudoBlock.numChildren; pseudoBlockElementNum++){
            let pseudoBlockElement = pseudoBlock.getChildAt(pseudoBlockElementNum);
            let pseudoBlockElementLoc = this.getChildBlockLoc(pseudoBlock.x,pseudoBlock.y,pseudoBlock.anchorOffsetX,pseudoBlock.anchorOffsetY,pseudoBlock.getAngle(),pseudoBlockElement.x,pseudoBlockElement.y);
            if(pseudoBlockElementLoc[0]+this.blockWidth>this.gameArea.width){
                touchBottomFlag = true;
                return touchBottomFlag;
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
    private frameNumber = 30;
    private maxPreMoveFrame = this.frameNumber*1;
    private moveSpeed = 0.5;
    private newSpeed = 0.3;
    private bottomRemoveFlag = false;
    private bottomMoveFlag = false;
    private deletRow;
    public onestep(){
        //update score
        this.updateScore()
        //get key bord
        let pressedButton = this.getKeyBord();
        //game logic
        if(this.newBlockFlag){
            if(!this.bottomRemoveFlag && !this.bottomMoveFlag){
                this.deletRow = this.CheckBottom();
            }
            if(this.deletRow.length == 0 && !this.bottomRemoveFlag && !this.bottomMoveFlag){
                //create new block
                this.currentBlock = new MoveBlock(this.nextBlock.getBlockNum(),this.nextBlock.getAngle());
                this.nextBlock = new DisplayNextBlock(Math.floor(Math.random() * 5) + 1,Math.floor(Math.random() * 4));
                this.newBlockFlag = false;
                this.runArea.addChildAt(this.currentBlock,0)
                this.UpdateDisplayRunBlock(Math.floor((this.blockWidth*5-this.currentBlock.currentWidth/2)/this.blockWidth)*this.blockWidth,-this.currentBlock.currentHeight);
                if(this.CheckTouchBottom(this.currentBlock)){
                    this.changeState = 2;
                }else{
                    this.UpdateDisplayNextBlock();
                }
                this.preMoveFrame = 0;
                this.maxPreMoveFrame = this.frameNumber*this.moveSpeed
            }else{
                if(this.bottomRemoveFlag){
                    this.bottomRemoveFlag = false;
                    this.removeBottom(this.deletRow);
                }else if(this.bottomMoveFlag){
                    this.bottomMoveFlag = false;
                    this.moveBottom(this.deletRow);
                }else if(this.deletRow.length != 0){
                    this.bottomRemoveFlag = true;
                    this.bottomMoveFlag = true;
                    this.score += Math.pow(2,this.deletRow.length);
                }
                this.preMoveFrame = 0;
                this.maxPreMoveFrame = this.frameNumber*this.newSpeed
            }
        }else if(this.preMoveFrame > this.maxPreMoveFrame || pressedButton != 0){
            //block move    0:none,1:up,2:left,3:right,4:down
            if(pressedButton == 1){
                let pseudoBlock = new MoveBlock(this.currentBlock.getBlockNum(),this.currentBlock.getAngle());
                pseudoBlock.moveBlock(this.currentBlock.x - 0,this.currentBlock.y + 0);
                this.rotationBlock(pseudoBlock);
                if(this.CheckLeftBound(pseudoBlock) || this.CheckTouchBottom(pseudoBlock) || this.CheckRightBound(pseudoBlock)){
                    this.UpdateDisplayRunBlock(0,0)
                    this.preMoveFrame = 0;
                    this.maxPreMoveFrame = this.frameNumber*this.moveSpeed
                }else{
                    this.UpdateDisplayRotationBlock()
                    this.preMoveFrame = 0;
                    this.maxPreMoveFrame = this.frameNumber*this.moveSpeed
                }
            }else if(pressedButton == 2){
                let pseudoBlock = new MoveBlock(this.currentBlock.getBlockNum(),this.currentBlock.getAngle());
                pseudoBlock.moveBlock(this.currentBlock.x - this.blockWidth,this.currentBlock.y + 0);
                if(this.CheckLeftBound(pseudoBlock) || this.CheckTouchBottom(pseudoBlock)){
                    this.UpdateDisplayRunBlock(0,0)
                    this.preMoveFrame = 0;
                    this.maxPreMoveFrame = this.frameNumber*this.moveSpeed
                }else{
                    this.UpdateDisplayRunBlock(-this.blockWidth,0)
                    this.preMoveFrame = 0;
                    this.maxPreMoveFrame = this.frameNumber*this.moveSpeed
                }
            }else if(pressedButton == 3){
                let pseudoBlock = new MoveBlock(this.currentBlock.getBlockNum(),this.currentBlock.getAngle());
                pseudoBlock.moveBlock(this.currentBlock.x + this.blockWidth,this.currentBlock.y + 0);
                if(this.CheckRightBound(pseudoBlock) || this.CheckTouchBottom(pseudoBlock)){
                    this.UpdateDisplayRunBlock(0,0)
                    this.preMoveFrame = 0;
                    this.maxPreMoveFrame = this.frameNumber*this.moveSpeed
                }else{
                    this.UpdateDisplayRunBlock(this.blockWidth,0)
                    this.preMoveFrame = 0;
                    this.maxPreMoveFrame = this.frameNumber*this.moveSpeed
                }
            }else if(pressedButton == 4){
                let pseudoBlock = new MoveBlock(this.currentBlock.getBlockNum(),this.currentBlock.getAngle());
                pseudoBlock.moveBlock(this.currentBlock.x + 0,this.currentBlock.y + 0);
                let moveDistance = 0;
                while(!this.CheckTouchBottom(pseudoBlock)){
                    pseudoBlock.moveBlock(0,this.blockWidth);
                    moveDistance += this.blockWidth;
                }
                this.UpdateDisplayRunBlock(0,moveDistance-this.blockWidth);
                this.preMoveFrame = 0;
                this.maxPreMoveFrame = this.frameNumber*this.moveSpeed
            }else if(pressedButton == 0){
                let pseudoBlock = new MoveBlock(this.currentBlock.getBlockNum(),this.currentBlock.getAngle());
                pseudoBlock.moveBlock(this.currentBlock.x + 0,this.currentBlock.y + this.blockWidth);
                if(this.CheckTouchBottom(pseudoBlock)){
                    this.runArea.removeChildAt(0);
                    //this.runArea.addChildAt(new MoveBlock(0,0),0);
                    for(let i=0;i<this.currentBlock.numChildren;i++){
                        let element = this.currentBlock.getChildAt(i);
                        let elementLoc = this.getChildBlockLoc(this.currentBlock.x,this.currentBlock.y,this.currentBlock.anchorOffsetX,this.currentBlock.anchorOffsetY,this.currentBlock.getAngle(),element.x,element.y);
                        let newFillBlock = new FilledBlock(0,0);
                        newFillBlock.moveBlock(elementLoc[0],elementLoc[1]);
                        this.gameArea.addChild(newFillBlock);
                    }
                    this.newBlockFlag = true;
                    this.preMoveFrame = 0;
                    this.maxPreMoveFrame = this.frameNumber*this.newSpeed
                }else{
                    this.UpdateDisplayRunBlock(0,this.blockWidth)
                    this.preMoveFrame = 0;
                    this.maxPreMoveFrame = this.frameNumber*this.moveSpeed
                }
            }
        }
        //clean key bord
        this.cleanKeyBord();
        //add frame
        this.preMoveFrame++;
    }

}