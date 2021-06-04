//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.addEventListener(egret.Event.ENTER_FRAME, this.Game, this)
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            //await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    //Main 
    private currentGameState = -1;
    private nextGameState = 0;
    private currentGameScene;

    private fillMtric: number[][];
    private rowNum = 17;
    private colNum = 10;
    private score: number;
    private currentBlock: number;
    private nextBlock: number;
    private newBlockFlag: boolean;

    private pressedButton = 0; //0:none,1:up,2:left,3:right,4:down

    protected Game(): void {
        if(this.nextGameState!=this.currentGameState){
            //remove original scene
            if (this.currentGameState!=-1){
                this.removeChild(this.currentGameScene)
            }
            //build new scene
            this.currentGameState = this.nextGameState;
            switch(this.currentGameState){
                case 0:{
                    console.log('Start Scene')
                    // init game data
                    this.score = 0;
                    this.fillMtric = [];
                    for(let i=0;i<this.rowNum;i++){
                        let tmp = [];
                        for(let i=0;i<this.colNum;i++){
                            tmp.push(0);
                        }
                        this.fillMtric.push(tmp);
                    }
                    this.currentBlock = Math.floor(Math.random() * 4) + 1;
                    this.nextBlock = Math.floor(Math.random() * 4) + 1;
                    this.newBlockFlag = true;
                    //init backbround
                    this.currentGameScene = new StartScene();
                    break;
                }
                case 1:{
                    console.log('Main Game')
                    this.currentGameScene = new GameScene();
                    this.currentGameScene.updateScore(this.score);
                    break;
                }
                default:{
                    console.log('Error Build Game State !!');
                    this.currentGameScene = new NoneScene();
                    break;
                }
            }
            this.addChild(this.currentGameScene);
        }else{
            //current scene

            //change screen
            if(this.currentGameScene.checkState()>=0){
                this.nextGameState = this.currentGameScene.checkState();
            }

            //main game
            if(this.currentGameState==1){
                //get key bord
                this.pressedButton = this.currentGameScene.getKeyBord();
                
                //clean key bord
                this.pressedButton = 0;
            }
        }
    }
    
}
