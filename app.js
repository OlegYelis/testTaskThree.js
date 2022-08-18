import Viewer from './viewer.js';
import * as THREE from './three.module.js';
export default class {
  constructor() {
    Viewer.init({
      renderer: {
        parent: document.body,
        antialias: true,
        alpha: false,
        clearColor: '#393B5F',
        pixelRatio: 1,
      },
    });
    this.createObject();
  }
  createObject() {
    // Viewer.scene.add(new THREE.GridHelper(10, 10));

    var object = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 32, 16),
      new THREE.MeshStandardMaterial({ color: 'blue' })
    );
    var object2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 16),
      new THREE.MeshStandardMaterial({ color: 'blue' })
    );
    var object3 = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 32, 16),
      new THREE.MeshStandardMaterial({ color: 'orange' })
    );
    var object4 = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 32, 16),
      new THREE.MeshStandardMaterial({ color: 'blue' })
    );
    var object5 = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 32, 16),
      new THREE.MeshStandardMaterial({ color: 'blue' })
    );
    var object6 = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 32, 16),
      new THREE.MeshStandardMaterial({ color: 'blue' })
    );
    var object7 = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 16),
      new THREE.MeshStandardMaterial({ color: 'blue' })
    );
    var object8 = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 32, 16),
      new THREE.MeshStandardMaterial({ color: 'blue' })
    );
    var object9 = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 32, 16),
      new THREE.MeshStandardMaterial({ color: 'blue' })
    );
    var object10 = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 32, 16),
      new THREE.MeshStandardMaterial({ color: 'blue' })
    );

    Viewer.scene.add(object);
    object.position.set(0.4, 0, 0);
    Viewer.scene.add(object2);
    object2.position.set(-0.4, 0.5, 0);
    Viewer.scene.add(object3);
    object3.position.set(0.4, 0.8, 0);
    Viewer.scene.add(object4);
    object4.position.set(-0.1, -0.2, 0);
    Viewer.scene.add(object5);
    object5.position.set(-0.2, -0.8, 0);
    Viewer.scene.add(object6);
    object6.position.set(0.2, 1.6, 0);
    Viewer.scene.add(object7);
    object7.position.set(-0.4, 2, 0);
    Viewer.scene.add(object8);
    object8.position.set(0.4, 2.3, 0);
    Viewer.scene.add(object9);
    object9.position.set(0.1, 2.8, 0);
    Viewer.scene.add(object10);
    object10.position.set(0.4, -1, 0);

    var rotateAroundWorldAxis = function (object, axis, radians) {
      var rotWorldMatrix = new THREE.Matrix4();
      rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);

      var currentPos = new THREE.Vector4(
        object.position.x,
        object.position.y,
        object.position.z,
        1
      );
      var newPos = currentPos.applyMatrix4(rotWorldMatrix);

      rotWorldMatrix.multiply(object.matrix);
      object.matrix = rotWorldMatrix;
      object.rotation.setFromRotationMatrix(object.matrix);

      object.position.x = newPos.x;
      object.position.y = newPos.y;
      object.position.z = newPos.z;
    };

    Viewer.addUpdate('transformation', () => {
      rotateAroundWorldAxis(object, new THREE.Vector3(0, 1, 0), Math.PI / 300);
      rotateAroundWorldAxis(object2, new THREE.Vector3(0, 1, 0), Math.PI / 300);
      rotateAroundWorldAxis(object3, new THREE.Vector3(0, 1, 0), Math.PI / 300);
      rotateAroundWorldAxis(object4, new THREE.Vector3(0, 1, 0), Math.PI / 300);
      rotateAroundWorldAxis(object5, new THREE.Vector3(0, 1, 0), Math.PI / 300);
      rotateAroundWorldAxis(object6, new THREE.Vector3(0, 1, 0), Math.PI / 300);
      rotateAroundWorldAxis(object7, new THREE.Vector3(0, 1, 0), Math.PI / 300);
      rotateAroundWorldAxis(object8, new THREE.Vector3(0, 1, 0), Math.PI / 300);
      rotateAroundWorldAxis(object9, new THREE.Vector3(0, 1, 0), Math.PI / 300);
      rotateAroundWorldAxis(object10, new THREE.Vector3(0, 1, 0), Math.PI / 300);
    });
  }
}
