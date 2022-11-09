const animal = {
    species: "Tiger"
  }
  
  const cat = Object.create(animal);
  
  cat.ownSpecies = "Lion"
  
  function func (obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop, obj[prop]);
      }
    }
  }
  
  func(cat)