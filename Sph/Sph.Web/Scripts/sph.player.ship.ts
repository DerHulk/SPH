/// <reference path="sph.const.ts" />

module sph {
    export class PlayerShip extends Phaser.Sprite {

        private RotationSpeed: number = 5;
        private Acceleration: number = 2;
        private IsPlayingRotateLeft: boolean = false;
        private IsPlayingRotateRight: boolean = false;

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, SpriteNames.PlayerShip, 0);

            this.animations.add("RotateLeft", [1, 2], 6, true);
            this.animations.add("RotateRight", [4, 5], 6, true);

            this.anchor.setTo(0.5, 0.5);
            game.add.existing(this);

        }

        update() {

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
                this.body.rotation -= this.RotationSpeed;

                if (!this.IsPlayingRotateLeft) {
                    this.animations.play('RotateLeft');
                    this.IsPlayingRotateLeft = true;
                }

            }
            else {

                if (this.IsPlayingRotateLeft) {
                    this.animations.stop('RotateLeft', true);
                    this.IsPlayingRotateLeft = false;
                    this.animations.frame = 0;
                }

            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {

                this.body.rotation += this.RotationSpeed;

                if (!this.IsPlayingRotateRight) {
                    this.animations.play('RotateRight');
                    this.IsPlayingRotateRight = true;
                }
            }
            else {

                if (this.IsPlayingRotateRight) {
                    this.animations.stop('RotateRight', true);
                    this.animations.frame = 0;
                    this.IsPlayingRotateRight = false;
                }
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {

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

        private resetPosition(): void {
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