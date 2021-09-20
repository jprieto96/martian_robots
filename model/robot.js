class Robot {

    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    moveForward() {
        this.#x++;
    }

    moveLeft() {
        this.#y--;
    }

    moveRight() {
        this.#y++;
    }

}