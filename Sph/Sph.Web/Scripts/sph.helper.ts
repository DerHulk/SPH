/// <reference path="sph.boot.ts" />
/// <reference path="sph.menu.ts" />
/// <reference path="sph.space.ts" />
/// <reference path="sph.const.ts" />

module sph {
    export class PositionHelper {

        public static NormalizeRotation(bodyRotation: number): number {

            var normalizedRotation = 0;

            if (bodyRotation < 0) {
                normalizedRotation = bodyRotation * -1;
            }
            else {
                normalizedRotation = 360 - bodyRotation;
            }

            return normalizedRotation;

        }

        public static GetFromPolar(radius: number, angleInDegree: number): Phaser.Point {

            var normalized = PositionHelper.NormalizeRotation(angleInDegree);
            var rad = Phaser.Math.degToRad(normalized);
            var point = new Phaser.Point(0, 0);

            point.x = radius * Math.cos(rad);
            point.y = (radius * Math.sin(rad)) * -1; // *-1 because we are using the normal cartesischen position system for calculation.

            return point;

        }

    }

    export class AnimationStateHelper {

        private Manager: Phaser.AnimationManager;
        private State: { [index: string]: boolean; } = {};

        constructor(manager: Phaser.AnimationManager) {
            this.Manager = manager;
        }

        public play(animationName: string) {
            this.ensureContains(animationName);

            if (!this.State[animationName]) {
                this.Manager.play(animationName);
                this.State[animationName] = true;
            }
        }

        public stop(animationName: string) {

            this.ensureContains(animationName);

            if (this.State[animationName]) {
                this.Manager.stop(animationName, true);
                this.State[animationName] = false;
                this.Manager.frame = 0;
            }

        }

        public ensureContains(animationName: string) {

            if (!this.contains(animationName)) {
                this.State[animationName] = false;
            }
        }

        private contains(animationName: string): boolean {
            return animationName in this.State;
        }

    }
} 