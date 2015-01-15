module sph {

    export class Script {
        public static get NewLine(): string { return "\r\n"; }
    }

    export class SpriteNames {

        public static get Loadbar(): string { return "Loadbar"; }
        public static get Logo(): string { return "Logo"; }
        public static get PlayerShip(): string { return "PlayerShip"; }
        public static get Starfield(): string { return "Starfield"; }

        public static get VirtualStickForward(): string { return "VirtualStickForward" }
        public static get VirtualStickLeft(): string { return "VirtualStickLeft" }
        public static get VirtualStickRight(): string { return "VirtualStickRight" }

    }

    export class AnimationNames {

        public static get RotateLeft(): string { return "RotateLeft"; }
        public static get RotateRight(): string { return "RotateRight"; }

    }

    export class StateNames {

        public static get Preload(): string { return "PreLoad"; }
        public static get Boot(): string { return "Boot"; }
        public static get Menu(): string { return "Menu"; }
        public static get Space(): string { return "Space"; }

    }
} 