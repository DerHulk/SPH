/// <reference path="sph.const.ts" />

module sph {

    export class Space extends Phaser.State {

        background: Phaser.Sprite;
        playership: PlayerShip;

        create() {

            this.background = this.add.sprite(100, 100, 'level1');
            this.game.add.text(50, 50, "SPH Rocks!", { font: "24px Arial", fill: "#FF3333" });

            var playerShip = new PlayerShip(this.game, 25, 25);
            this.game.physics.enable(playerShip);

        }

    }
} 