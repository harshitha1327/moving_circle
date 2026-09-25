const r = require("raylib");

const WIDTH = 1000;
const HEIGHT = 1000;

const FPS = 50;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Moving Circle");
    r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    const radius = 100;
    const y = 300;
    const x = 200;
    r.DrawCircle(x, y, radius, r.RED);
    r.EndDrawing();

}

function teardown() {
    return r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
