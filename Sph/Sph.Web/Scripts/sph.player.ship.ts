/// <reference path="sph.const.ts" />

module sph {
    export class PlayerShip extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, SpriteNames.PlayerShip, 0);

            this.anchor.setTo(0.5, 0.5);
            game.add.existing(this);

        }

        update() {

            this.body.velocity.x = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {

                this.body.velocity.x = -150;
                this.body.rotation += 5;

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {

                this.body.velocity.x = 150;
                this.body.rotation -= 5;

            }
            else {
                this.animations.frame = 0;
            }

        }

    }
} 