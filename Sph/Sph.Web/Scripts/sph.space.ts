/// <reference path="sph.const.ts" />

module sph {

    export class Space extends Phaser.State {

        background: Phaser.TileSprite;
        playership: PlayerShip;
        player: Array<Phaser.Sprite> = new Array<Phaser.Sprite>();
        debug: Phaser.Text;

        LeftRotate: Phaser.Button;
        RightRotate: Phaser.Button;
        Forward: Phaser.Button;
        Backward: Phaser.Button;

        Network: NetworkHelper;

        create() {

            this.background = this.game.add.tileSprite(0, 0, 800, 600, SpriteNames.Starfield);
            this.background.fixedToCamera = true;

            this.debug = this.game.add.text(50, 50, "SPH Rocks!", { font: "24px Arial", fill: "#FF3333" });

            this.playership = new PlayerShip(this.game, 25, 25);
            this.game.physics.enable(this.playership);

            this.camera.follow(this.playership);
            this.camera.bounds = null;

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

            this.setupInput();
            this.setupNetwork();

        }

        update() {

            this.background.tilePosition.x = this.playership.position.x * -1;
            this.background.tilePosition.y = this.playership.position.y * -1;

            if (this.playership == null)
                return;

            this.game.debug.text(" input left: " + this.playership.EngineLeft +
                " input right " + this.playership.EngineRight, 0, 10);

            this.debug.text = this.playership.getDebugInfo();
            
        }

        private setupInput() {

            if (this.game.device.desktop) {
                this.createInputForDesktop();
            }
            else {
                this.createInputForMobil();
            }

        }

        private setupNetwork() {

            this.Network = new NetworkHelper(this.game);

            this.game.time.events.loop(60, () => {

                this.Network.broadcastShipPosition(this.playership);
                var position = this.Network.GetPlayerPosition().pop();

                if (position == null)
                    return;

                if (this.player.length <= 0) {
                    var newPlayer = new Phaser.Sprite(this.game, position.x, position.y, SpriteNames.Ship2);
                    this.player.push(newPlayer);

                    this.game.add.existing(newPlayer);
                }
                else {
                    this.player[0].position = position;
                }


            }, this);
        }

        private createInputForMobil() {

            var height = 450;
            this.LeftRotate = this.game.add.button(50, height, SpriteNames.VirtualStickLeft);
            this.LeftRotate.fixedToCamera = true;

            this.RightRotate = this.game.add.button(150, height, SpriteNames.VirtualStickRight);
            this.RightRotate.fixedToCamera = true;

            this.Forward = this.game.add.button(120, height, SpriteNames.VirtualStickForward);
            this.Forward.fixedToCamera = true;

            this.Backward = this.game.add.button(120, height + 50, SpriteNames.VirtualStickForward);
            this.Backward.fixedToCamera = true;

            this.game.input.onDown.add(() => this.game.scale.startFullScreen(false));

            this.LeftRotate.events.onInputOver.add(() => { this.playership.EngineLeft = true; });
            this.LeftRotate.events.onInputOut.add(() => { this.playership.EngineLeft = false; });
            this.LeftRotate.events.onInputDown.add(() => { this.playership.EngineLeft = true; });
            this.LeftRotate.events.onInputUp.add(() => { this.playership.EngineLeft = false; });

            this.RightRotate.events.onInputOver.add(() => { this.playership.EngineRight = true; });
            this.RightRotate.events.onInputOut.add(() => { this.playership.EngineRight = false; });
            this.RightRotate.events.onInputDown.add(() => { this.playership.EngineRight = true; });
            this.RightRotate.events.onInputUp.add(() => { this.playership.EngineRight = false; });

            this.Forward.events.onInputOver.add(() => { this.playership.EngineForward = true; });
            this.Forward.events.onInputOut.add(() => { this.playership.EngineForward = false; });
            this.Forward.events.onInputDown.add(() => { this.playership.EngineForward = true; });
            this.Forward.events.onInputUp.add(() => { this.playership.EngineForward = false; });

            this.Backward.events.onInputOver.add(() => { this.playership.EngineBackward = true; });
            this.Backward.events.onInputOut.add(() => { this.playership.EngineBackward = false; });
            this.Backward.events.onInputDown.add(() => { this.playership.EngineBackward = true; });
            this.Backward.events.onInputUp.add(() => { this.playership.EngineBackward = false; });

        }

        private createInputForDesktop() {

            this.game.input.keyboard.addKey(Phaser.Keyboard.A).onDown.add(() => { this.playership.EngineLeft = true; });
            this.game.input.keyboard.addKey(Phaser.Keyboard.A).onUp.add(() => { this.playership.EngineLeft = false; });

            this.game.input.keyboard.addKey(Phaser.Keyboard.D).onDown.add(() => { this.playership.EngineRight = true; });
            this.game.input.keyboard.addKey(Phaser.Keyboard.D).onUp.add(() => { this.playership.EngineRight = false; });

            this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(() => { this.playership.EngineForward = true; });
            this.game.input.keyboard.addKey(Phaser.Keyboard.W).onUp.add(() => { this.playership.EngineForward = false; });

            this.game.input.keyboard.addKey(Phaser.Keyboard.S).onDown.add(() => { this.playership.EngineBackward = true; });
            this.game.input.keyboard.addKey(Phaser.Keyboard.S).onUp.add(() => { this.playership.EngineBackward = false; });

        }
    }
} 