/// <reference path="sph.boot.ts" />
/// <reference path="sph.menu.ts" />
/// <reference path="sph.space.ts" />
/// <reference path="sph.const.ts" />

module sph {
   export class Game extends Phaser.Game {

        constructor() {
            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add(StateNames.Boot, new Boot(), false);
            this.state.add(StateNames.Preload, new Preload(), false);
            this.state.add(StateNames.Menu, new Menu(), false);
            this.state.add(StateNames.Space, new Space(), false);

            this.state.start(StateNames.Boot);
        }
    }

    window.onload = () => {

        var game = new Game();

    };
}

