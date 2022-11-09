function objectCreate (obj) {
    const emptyObj = Object.create(null);
    
    return console.log(Object.getPrototypeOf(emptyObj))
  }
  
  objectCreate()