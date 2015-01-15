/// <reference path="sph.const.ts" />

module sph {
    export class PlayerShip extends Phaser.Sprite {

        private RotationSpeed: number = 5;
        private Acceleration: number = 2;
        private AnimationState: AnimationStateHelper;
        
        EngineLeft: boolean;
        EngineRight: boolean;
        EngineForward: boolean;
        EngineBackward: boolean;

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, SpriteNames.PlayerShip, 0);

            this.animations.add(AnimationNames.RotateLeft, [1, 2], 6, true);
            this.animations.add(AnimationNames.RotateRight, [4, 5], 6, true);
            this.AnimationState = new AnimationStateHelper(this.animations);

            this.anchor.setTo(0.5, 0.5);
            game.add.existing(this);

        }

        private rotateLeft(rotate: boolean) {

            if (rotate) {
                this.body.rotation -= this.RotationSpeed;
                this.AnimationState.play(AnimationNames.RotateLeft);
            }
            else {
                this.AnimationState.stop(AnimationNames.RotateLeft);
            }
        }

        private rotateRight(rotate: boolean) {

            if (rotate) {

                this.body.rotation += this.RotationSpeed;
                this.AnimationState.play(AnimationNames.RotateRight);
            }
            else {
                this.AnimationState.stop(AnimationNames.RotateRight);
            }
        }

        update() {

            this.rotateLeft(this.EngineLeft);
            this.rotateRight(this.EngineRight);

            if (this.EngineForward) {

                var polar = PositionHelper.GetFromPolar(this.Acceleration, this.angle);

                this.body.velocity.x += polar.x;
                this.body.velocity.y += polar.y;
            }
            else if (this.EngineBackward) {

                var polar = PositionHelper.GetFromPolar(this.Acceleration, this.angle);

                this.body.velocity.x -= polar.x;
                this.body.velocity.y -= polar.y;

            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)) {
                this.resetPosition();
            }

        }

        public getDebugInfo(): string {

            return "X " + this.position.x + Script.NewLine +
                   "Y " + this.y + Script.NewLine+
                   "R " + this.rotation + Script.NewLine +
                   "A " + this.angle + Script.NewLine +
                   "sph-R " + PositionHelper.NormalizeRotation(this.angle);

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