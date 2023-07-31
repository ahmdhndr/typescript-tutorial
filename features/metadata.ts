import "reflect-metadata";

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    const middleware = Reflect.getMetadata("middleware", target.prototype, key);

    // router.get(path, middlware, target.prototype[key]);
  }
}

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);

// const plane = {
//   color: "red",
// };

// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("height", 10, plane);
// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);
// console.log(note);
// console.log(height);

// Bisa juga digunakan untuk menyematkan informasi ke dalam properti dari objek
// Reflect.defineMetadata("note", "hi there", plane, "color");
// const note = Reflect.getMetadata("note", plane, "color");
// console.log(note);
// console.log(plane.color);
