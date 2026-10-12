/*
For each square on the canvas
    Determine which square on the grid corresponds to this square on the canvas
    Determine the color seen through that grid square
    Paint the square with that color
*/

/*
x increases toward the right and decreases
toward the left, while y increases toward the top and decreases toward the bottom
*/

// NEED TO READ ABOUT THIS: The theory of how color works
// linear algebra

// c is canvas reference
function put_pixel(x, y, c, rgb_arr = [0, 0, 0, 255]) {
  const pixel = c.createImageData(1, 1);

  pixel.data[0] = rgb_arr[0]; // Red
  pixel.data[1] = rgb_arr[1]; // Green
  pixel.data[2] = rgb_arr[2]; // Blue
  pixel.data[3] = rgb_arr[3]; // Alpha

  c.putImageData(pixel, x, y);
}

function create_canvas(h, w) {
  let canvas = document.createElement("canvas");

  canvas.id = "#canvas";
  canvas.height = h;
  canvas.width = w;

  document.querySelector("body").appendChild(canvas);

  return canvas;
}

addEventListener("load", () => {
  let C = create_canvas(540, 540).getContext("2d");
  C.imageSmoothingEnabled = false;

  let i = 1;

  for (; i < 540; i++) {
    let j = 1;

    while (j < 540) {
      put_pixel(j, i, C);
      j += 1;
    }
  }
});
