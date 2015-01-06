module sph {

    export class SpriteNames {

        public static get Loadbar(): string { return "Loadbar"; }
        public static get Logo(): string { return "Logo"; }
        public static get PlayerShip(): string { return "PlayerShip"; }

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