export class User {
    constructor(
        public readonly id: string,
        public name: string,
        public email: string
    ) { }

    updateName(newName: string) {
        this.name = newName;
    }
}
