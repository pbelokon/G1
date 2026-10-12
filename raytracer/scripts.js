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

  // coordinate origin at the center (converting to regular grid)
  let true_x = Math.floor(c.canvas.width / 2) + x;
  let true_y = Math.floor(c.canvas.height / 2) - y;

  c.putImageData(pixel, true_x, true_y);
}

function create_canvas(h, w) {
  let canvas = document.createElement("canvas");

  canvas.id = "#canvas";
  canvas.height = h;
  canvas.width = w;

  document.querySelector("body").appendChild(canvas);

  return canvas;
}

// function get_image_data(img) {
//   let A = document.getElementsByClassName("loader");
//   console.log(A);
//   let a_context = A.getContext("2d");
//   a_context.drawImage(img);

//   console.log(a_context.getImageData());
// }

addEventListener("load", () => {
  let C = create_canvas(540, 540).getContext("2d");
  C.imageSmoothingEnabled = false;

  for (let i = 0; i < 540; i++) {
    put_pixel(i, i, C);
  }
  for (let j = 0; j < 540; j++) {
    put_pixel(-j, -j, C, (rgb_arr = [0, 255, 0, 255]));
  }

  for (let j = 0; j < 540; j++) {
    put_pixel(-j, j, C, (rgb_arr = [0, 0, 255, 255]));
  }

  for (let j = 0; j < 540; j++) {
    put_pixel(j, -j, C, (rgb_arr = [255, 0, 0, 255]));
  }

  for (let j = 0; j < 540; j++) {
    put_pixel(0, j, C, (rgb_arr = [255, 0, 0, 255]));
  }

  for (let j = 0; j < 540; j++) {
    put_pixel(j, 0, C, (rgb_arr = [255, 0, 0, 255]));
  }

  for (let j = 0; j < 540; j++) {
    put_pixel(-j, 0, C, (rgb_arr = [255, 0, 0, 255]));
  }

  for (let j = 0; j < 540; j++) {
    put_pixel(0, -j, C, (rgb_arr = [255, 0, 0, 255]));
  }

  // wall
  for (let j = 540; j > 0; j--) {
    put_pixel(j, 270, C, (rgb_arr = [0, 255, 0, 255]));
  }

  for (let j = 540; j > 0; j--) {
    put_pixel(-j, 270, C, (rgb_arr = [0, 200, 0, 255]));
  }

  for (let j = 540; j > 0; j--) {
    put_pixel(-270, j, C, (rgb_arr = [0, 100, 0, 255]));
  }

  for (let j = 540; j > 0; j--) {
    put_pixel(-270, -j, C, (rgb_arr = [0, 230, 0, 255]));
  }

  for (let j = 0; j < 540; j++) {
    put_pixel(269, -j, C, (rgb_arr = [0, 230, 0, 255]));
  }

  for (let j = 0; j < 540; j++) {
    put_pixel(269, j, C, (rgb_arr = [0, 230, 0, 255]));
  }

  for (let j = 0; j < 540; j++) {
    put_pixel(j, -269, C, (rgb_arr = [0, 255, 0, 255]));
  }

  for (let j = 0; j < 540; j++) {
    put_pixel(-j, -269, C, (rgb_arr = [0, 200, 0, 255]));
  }

  let r = (Math.PI * 2) / 269;

  for (let j = 540; j > 0; j--) {
    let x = r * j;
    let p = Math.sin(x) * 100;
    put_pixel(j, p, C, (rgb_arr = [0, 100, 0, 255]));
  }

  for (let j = 540; j > 0; j--) {
    let x = r * j;
    let p = Math.sin(x) * 100;
    put_pixel(-j, -p, C, (rgb_arr = [0, 100, 0, 255]));
  }
});
