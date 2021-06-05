class FilledBlock extends eui.Component{
    
    private blockNum:number;
    private rotation_angle_number = 0;
    private rotation_anchor_change = [[60/2, 60/2],
                                      [60*2+60/2, 60/2],
                                      [60+60/2, 60+60/2],
                                      [60+60/2, 60+60/2],
                                      [60+60/2, 60/2],
                                      [60, 60]];
    private currentHeight;
    private currentWidth;

    public constructor(blockNum:number, angle:number){
        super();
        this.blockNum = blockNum;
        let blockStr = String(blockNum);
        if(blockNum==0){
            this.skinName = "resource/eui_skins/filled_block.exml";
        }else{
            this.skinName = "resource/eui_skins/block_"+blockStr+".exml";
        }
        this.rotationBlock(angle)
    }

    public getBlockNum(){
        return this.blockNum;
    }
    public getAngle(){
        return this.rotation_angle_number
    }

    public rotationBlock(angle:number){
        this.rotation_angle_number = (this.rotation_angle_number + angle) % 4;
        this.anchorOffsetX = this.rotation_anchor_change[this.blockNum][0];
        this.anchorOffsetY = this.rotation_anchor_change[this.blockNum][1];
        this.rotation = this.rotation_angle_number * 90;
        switch(this.rotation_angle_number){
            case 1:{
                this.anchorOffsetX = 0;
                this.anchorOffsetY = this.height;
                this.currentWidth = this.height;
                this.currentHeight = this.width;
                break;
            }
            case 2:{
                this.anchorOffsetX = this.width;
                this.anchorOffsetY = this.height;
                this.currentWidth = this.width;
                this.currentHeight = this.height;
                break;
            }
            case 3:{
                this.anchorOffsetX = this.width;
                this.anchorOffsetY = 0;
                this.currentWidth = this.height;
                this.currentHeight = this.width;
                break;
            }
            default:{
                this.anchorOffsetX = 0;
                this.anchorOffsetY = 0;
                this.currentWidth = this.width;
                this.currentHeight = this.height;
                break;
            }
        } 
    }

    public moveBlock(distanceX:number, distanceY:number){
        this.x = this.x + distanceX;
        this.y = this.y + distanceY;
    }

}