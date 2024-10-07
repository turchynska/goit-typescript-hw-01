function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  const result = merge({email: 'qwerty@mail.com'}, {number: 12345431});
  console.log(result)