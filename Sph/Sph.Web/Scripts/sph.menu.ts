/// <reference path="sph.const.ts" />

module sph
{
    export class Menu extends Phaser.State {

        logo: Phaser.Sprite;

        create() {
            this.logo = this.add.sprite(this.world.centerX, -300, SpriteNames.Logo);
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            this.input.onDown.addOnce(this.fadeOut, this);
        }

        fadeOut() {

            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);

        }

        startGame() {

            this.game.state.start(StateNames.Space, true, false);

        }

    }
}