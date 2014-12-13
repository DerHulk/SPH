/// <reference path="sph.const.ts" />

module sph {
    export class Boot extends Phaser.State {

        preload() {
            this.load.image(SpriteNames.Loadbar, './Content/images/Loadbar.png');
        }

        create() {

            this.game.state.start(StateNames.Preload, true, false);
          
        }

    }
}

