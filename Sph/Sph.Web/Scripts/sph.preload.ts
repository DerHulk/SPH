/// <reference path="sph.const.ts" />

module sph {
    export class Preload extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {

            this.preloadBar = this.add.sprite(200, 250, SpriteNames.Loadbar);
            this.load.setPreloadSprite(this.preloadBar);

            this.load.image(SpriteNames.Logo, './Content/images/SphIcon.png');
            this.load.image(SpriteNames.PlayerShip, './Content/images/PlayerShip.png');
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



