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
        //?????????????????????????????????
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
            //??????????????????????????????,??????????????????????????????????????????????????????
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

    protected Game(): void {
        if(this.nextGameState!=this.currentGameState){
            //remove original scene
            if (this.currentGameState!=-1 && this.nextGameState!=2){
                for(let i=0;i<this.numChildren;i++){
                    this.removeChildAt(i)
                }
            }
            //build new scene
            this.currentGameState = this.nextGameState;
            switch(this.currentGameState){
                case 0:{
                    console.log('Start Scene')
                    //init backbround
                    this.currentGameScene = new StartScene();
                    break;
                }
                case 1:{
                    console.log('Main Game')
                    //init backbround
                    this.currentGameScene = new GameScene();
                    break;
                }
                case 2:{
                    console.log('Finish Game')
                    let score = this.currentGameScene.getScore();
                    this.currentGameScene = new FinishScene(score);
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

            //change screen check
            if(this.currentGameScene.checkState()>=0){
                this.nextGameState = this.currentGameScene.checkState();
            }

            //main game
            if(this.currentGameState==1){
                this.currentGameScene.onestep();
            }
        }
    }
    
}
