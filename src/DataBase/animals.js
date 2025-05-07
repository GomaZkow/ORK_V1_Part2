const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllAnimals = () => {
  return DB.animals;
};

const getAnimalById = (id) => {
  return DB.animals.find((animal) => animal.id == id);
};

const createAnimal = (newAnimal) => {
  const animalExists = getAnimalById(newAnimal.id);
  if (animalExists) {
    return null;
  }
  DB.animals.push(newAnimal);
  saveToDatabase(DB);
  return newAnimal;
};

const updateAnimal = (id, updatedAnimal) => {
  const index = DB.animals.findIndex((animal) => animal.id == id);
  if (index == -1) return null;
  const currentAnimal = DB.animals[index];
  const newAnimal = {
    ...updatedAnimal,
    id: id,
    createdAt: currentAnimal.createdAt,
  };
  DB.animals[index] = newAnimal;
  saveToDatabase(DB);
  return newAnimal;
};

const patchAnimalAge = (id, newAge) => {
  const animal = getAnimalById(id);
  if (animal) return null;
  animal.age = newAge;
  saveToDatabase(DB);
  return animal;
};

const deleteAnimal = (id) => {
  const index = DB.animals.findIndex((animal) => animal.id == id);
  if (index == -1) return false;
  DB.animals.splice(index, 1);
  saveToDatabase(DB);
  return true;
};

module.exports = {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  patchAnimalAge,
  deleteAnimal,
};
