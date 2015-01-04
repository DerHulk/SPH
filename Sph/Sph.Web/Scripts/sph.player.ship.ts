/// <reference path="sph.const.ts" />

module sph {
    export class PlayerShip extends Phaser.Sprite {

        private RotationSpeed: number = 5;
        private Acceleration: number = 2;

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, SpriteNames.PlayerShip, 0);

            this.anchor.setTo(0.5, 0.5);
            game.add.existing(this);

        }

        update() {
           
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {

                this.body.rotation -= this.RotationSpeed;

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {

                this.body.rotation += this.RotationSpeed;

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {

                var polar = PositionHelper.GetFromPolar(this.Acceleration, this.angle);

                this.body.velocity.x += polar.x;
                this.body.velocity.y += polar.y;
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {

                var polar = PositionHelper.GetFromPolar(this.Acceleration, this.angle);

                this.body.velocity.x -= polar.x;
                this.body.velocity.y -= polar.y;

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {
                this.resetPosition();
            }
            
        }

        private resetPosition():void {
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