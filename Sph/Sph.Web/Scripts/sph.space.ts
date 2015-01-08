/// <reference path="sph.const.ts" />

module sph {

    export class Space extends Phaser.State {

        background: Phaser.TileSprite;
        playership: PlayerShip;
        debug: Phaser.Text;

        create() {

            this.background = this.game.add.tileSprite(0, 0, 800, 600, 'imageKey');
            this.background.fixedToCamera = true;

            this.debug =  this.game.add.text(50, 50, "SPH Rocks!", { font: "24px Arial", fill: "#FF3333" });

            this.playership = new PlayerShip(this.game, 25, 25);
            this.game.physics.enable(this.playership);

            this.camera.follow(this.playership);
            this.camera.bounds = null;

         
        }

        update() {

            this.background.tilePosition.x = this.playership.position.x * -1;
            this.background.tilePosition.y = this.playership.position.y * -1;

            if (this.playership == null)
                return;

            this.debug.text = "X " + this.playership.position.x + "\r\n" +
            "Y " + this.playership.y + "\r\n" +
            "R " + this.playership.rotation + "\r\n" +
            "A " + this.playership.angle + "\r\n" +
            "sph-R " + PositionHelper.NormalizeRotation( this.playership.angle );
        }

    }
} 