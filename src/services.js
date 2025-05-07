const Animals = require("./DataBase/animals");
const { v4: uuid } = require("uuid");

const getAllAnimals = () => Animals.getAllAnimals();

const getOneAnimal = (id) => Animals.getAnimalById(id);

const createNewAnimal = (animalData) => {
  const newAnimal = {
    id: uuid(),
    ...animalData,
    createdAt: new Date().toISOString()
  };
  return Animals.createAnimal(newAnimal);
};

const updateAnimal = (id, updateData) => {
  return Animals.updateAnimal(id, updateData);
};

const patchAnimalAge = (id, age) => {
  return Animals.patchAnimalAge(id, age);
};

const deleteAnimal = (id) => Animals.deleteAnimal(id);

module.exports = {
  getAllAnimals,
  getOneAnimal,
  createNewAnimal,
  updateAnimal,
  patchAnimalAge,
  deleteAnimal
};
