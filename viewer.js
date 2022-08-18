import * as THREE from './three.module.js';
export default {
  init(data) {
    this.createResize();

    this.createRenderer(data.renderer);
    this.createCamera();
    this.createScene();
    this.createLight();

    this.update();
  },
  createRenderer(settings) {
    if (this.renderer) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);

      this.renderer.dispose();
    }

    this.renderer = new THREE.WebGLRenderer(settings);

    settings.parent.appendChild(this.renderer.domElement);

    this.renderer.setClearColor(settings.clearColor || 'black');

    this.renderer.setPixelRatio(settings.pixelRatio || devicePixelRatio);

    var that = this;

    this.addResize('resize_render', () => {
      that.renderer.setSize(
        that.renderer.domElement.parentNode.offsetWidth,
        that.renderer.domElement.parentNode.offsetHeight
      );
    });
    this.resizePool['resize_render']();
  },
  createResize() {
    var that = this;
    window.addEventListener('resize', () => {
      that.resize();
    });
  },
  resizePool: {},
  addResize(name, func) {
    this.resizePool[name] = func;
  },
  removeRize(name) {
    delete this.resizePool[name];
  },
  resize() {
    for (var key in this.resizePool) this.resizePool[key]();
  },
  createCamera() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.renderer.domElement.width / this.renderer.domElement.height,
      1,
      100
    );

    this.camera.position.set(2.5, -1.2, 4);
    this.camera.lookAt(-5, 2.5, -2);

    var that = this;

    this.addResize('resize_camera', () => {
      that.camera.aspect = that.renderer.domElement.width / that.renderer.domElement.height;

      that.camera.updateProjectionMatrix();
    });
  },
  createScene() {
    this.scene = new THREE.Scene();
  },
  createLight() {
    this.light1 = new THREE.DirectionalLight(0xffffff, 0.5);

    this.scene.add(this.light1);

    this.light1.position.set(-1, 3, 10);

    this.light2 = new THREE.AmbientLight(0xffffff, 0.5);

    this.scene.add(this.light2);
  },
  addUpdate(name, func) {
    this.updatePool[name] = func;
  },
  removeUpdate(name) {
    delete this.updatePool[name];
  },
  updatePool: {},
  update() {
    this.renderer.render(this.scene, this.camera);
    var that = this;
    requestAnimationFrame(() => {
      that.update();
    });
    for (var key in this.updatePool) this.updatePool[key]();
  },
};

// var clock = new THREE.Clock();
// var angle = 0; // текущий угол
// var angularSpeed = THREE.Math.degToRad(20); // угловая скорость - градусов в секунду
// var delta = 0;
// var radius = 20;
// function animate() {
//   delta = clock.getDelta(); // getDelta() - возвращает интервал в долях секунды
//   requestAnimationFrame(animate);

//   camera.position.x = Math.cos(angle) * radius;
//   camera.position.z = Math.sin(angle) * radius;
//   angle += angularSpeed * delta; // приращение угла

//   camera.lookAt(mesh.position);

//   renderer.render(scene, camera);
// }
