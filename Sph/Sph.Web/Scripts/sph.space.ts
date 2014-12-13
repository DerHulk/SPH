/// <reference path="sph.const.ts" />

module sph {

    export class Space extends Phaser.State {

        background: Phaser.Sprite;

        create() {

            this.background = this.add.sprite(100, 100, 'level1');
            var text = new Phaser.Text(this.game, 50, 50, "SPH Rocks!", null);

        }

    }
} 