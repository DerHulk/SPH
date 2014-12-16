/// <reference path="sph.const.ts" />

module sph {
    export class PlayerShip extends Phaser.Sprite {

        Rotation: number;
        Ang: number;

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, SpriteNames.PlayerShip, 0);

            this.anchor.setTo(0.5, 0.5);
            game.add.existing(this);

        }

        update() {

            var grad = (Math.PI / 180) * this.body.rotation;

            if (this.body.rotation < 0) {
                this.Rotation = this.body.rotation * -1;
            }
            else
            {
                this.Rotation = 360 - this.body.rotation;
            }


            this.Ang = this.Rotation * (Math.PI/180 );
           
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {

                this.body.rotation -= 5;

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {

                this.body.rotation += 5;

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
                this.body.velocity.x += 2 * Math.cos(this.Ang);
                this.body.velocity.y += (2 * Math.sin(this.Ang)) * -1;
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {

                this.body.velocity.x -= 2 * Math.cos(this.Ang);
                this.body.velocity.y -= (2 * Math.sin(this.Ang)) * -1;

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {

                this.body.position.x = 0;
                this.body.position.y = 0;

                this.body.rotation = 0;

                this.body.acceleration.x = 0;
                this.body.acceleration.y = 0;

                this.body.velocity.x = 0;
                this.body.velocity.y = 0;
            }
        }

    }
} 