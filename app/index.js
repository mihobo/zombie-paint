function onDomReady(window, fn) {
  window.onload = fn;
}

function getCanvasElement() {
  return htmlCanvas = document.getElementById('canvas')
}

function getStroke() {
  return new Stroke();
}

function getBucket() {
  return new Bucket();
};

function buildCanvas(canvas = new Canvas(getCanvasElement(), getStroke(), getBucket())) {
  return canvas;
};

function setUpController(controller = new Controller(jQuery, buildCanvas())) {
  controller.setCanvasMouseDownListener();
  controller.setCanvasMouseMoveListener();
  controller.setCanvasMouseUpListener();
  controller.setCanvasMouseLeaveListener();
  controller.setPaletteClickListener();
  controller.setSizerClickListener();
  controller.setCanvasClearClickListener();
  controller.setEraserClickListener();
  controller.setBucketClickListener();
  controller.setSizerClickListener();
  controller.setRectangleClickListener();
  controller.setCircleClickListener();
  controller.setStarClickListener();
  controller.setSaveClickListener();
  return controller;
};

function pageElementSetup(doc) {
  setUpController();
};

onDomReady(jQuery, window, pageElementSetup(document));
