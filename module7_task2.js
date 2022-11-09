const animal = {
    species: "Tiger",
    pattern: "stripes"
  }
  
  function propertyName (str, obj) {
    return (str in obj)
  }
  
  console.log(propertyName('pattern', animal))