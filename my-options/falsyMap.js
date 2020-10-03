/////////////////
function MapCreator() {
  const mapObj = {};

  function creatKey(key) {
    if (typeof key === "object" || typeof key === "function") {
      let id = Symbol.for(key);
      return id;
    } else {
      return key;
    }
  }

  function set(key, value) {
    let id = creatKey(key);
    mapObj[id] = value;
  }

  function get(key) {
    let id = creatKey(key);
    return mapObj[id];
  }

  function del(key) {
    let id = creatKey(key);
    if (mapObj[id]) {
      let delValue = mapObj[id];
      delete mapObj[id];
      return delValue;
    } else {
      return "not found key";
    }
  }

  function has(key) {
    let id = creatKey(key);
    if (mapObj[id]) {
      return true;
    } else {
      return false;
    }
  }

  function clear() {
    const arrKeys = Reflect.ownKeys(mapObj);

    arrKeys.forEach((key) => delete mapObj[key]);
  }

  function forEach(callback) {
    const arrKeys = Reflect.ownKeys(mapObj);
    arrKeys.forEach((key) => {
      let item = mapObj[key];
      let idx = key;
      callback(item, idx);
    });
  }

  return {
    set,
    get,
    del,
    has,

    get size() {
      return Reflect.ownKeys(mapObj).length;
    },

    clear,
    forEach,
  };
}

const keyObj = {
  name: "Anton",
};

const falsyMap = MapCreator();
falsyMap.set(keyObj, "Anton from object");
falsyMap.set(123, "Anton from ");
falsyMap.set(null, "Anton");
console.log(falsyMap.size);
falsyMap.forEach((item, idx) => {
  console.log(item, idx);
});

/////////////////
