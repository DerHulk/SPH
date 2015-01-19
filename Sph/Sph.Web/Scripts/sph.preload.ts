/// <reference path="sph.const.ts" />

module sph {
    export class Preload extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {

            this.preloadBar = this.add.sprite(200, 250, SpriteNames.Loadbar);
            this.load.setPreloadSprite(this.preloadBar);

            this.load.image(SpriteNames.Logo, './Content/images/SphIcon.png');
       
            this.load.spritesheet(SpriteNames.PlayerShip, './Content/images/PlayerShipTile.png', 64, 64);
            this.load.image(SpriteNames.Starfield, './Content/images/StarBackground.png');

            if (!this.game.device.desktop) {
                this.load.image(SpriteNames.VirtualStickForward, './Content/images/VirtualJoystickButton.png');
                this.load.image(SpriteNames.VirtualStickLeft, './Content/images/VirtualStick_Left.png');
                this.load.image(SpriteNames.VirtualStickRight, './Content/images/VirtualStick_Right.png');
            }

            var network = new NetworkHelper(this.game);
            network.preload();

        }

        create() {

            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);

        }

        private startMainMenu() {

            this.game.state.start('Menu', true, false);

        }

    }
}



