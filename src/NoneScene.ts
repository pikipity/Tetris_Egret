class NoneScene extends eui.Component{
    private changeState:number = -1;

    public checkState():number{
        return this.changeState;
    }
    
    public constructor(){
        super();
        this.skinName = "resource/eui_skins/none_screen.exml";
    }

    

}