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

        public static GetFromPolar(radius: number, angleInDegree: number): Phaser.Point{

            var normalized = PositionHelper.NormalizeRotation(angleInDegree);
            var rad = Phaser.Math.degToRad(normalized);
            var point = new Phaser.Point(0, 0);

            point.x = radius * Math.cos(rad);
            point.y = (radius * Math.sin(rad)) * -1; // *-1 because we are using the normal cartesischen position system for calculation.

            return point;
           
        }

    }
} 