const AnimalsService = require("./services");

const getAllAnimals = (req, res) => {
  const animals = AnimalsService.getAllAnimals();
  res.send({ status: "OK", data: animals });
};

const getOneAnimal = (req, res) => {
  const { id } = req.params;
  const animal = AnimalsService.getOneAnimal(id);
  if (!animal) {
    return res.status(404).send({ status: "ERROR", message: "животное не найдено" });
  }
  res.send({ status: "OK", data: animal });
};

const createNewAnimal = (req, res) => {
  const animalData = req.body;
  const createdAnimal = AnimalsService.createNewAnimal(animalData);
  if (!createdAnimal) {
    return res.status(400).send({ status: "ERROR", message: "ошибка создания " });
  }
  res.send({ status: "OK", data: createdAnimal });
};

const updateAnimal = (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const updatedAnimal = AnimalsService.updateAnimal(id, updateData);
  if (!updatedAnimal) {
    return res.status(404).send({ status: "ERROR", message: "животное не найдено" });
  }
  res.send({ status: "OK", data: updatedAnimal });
};

const patchAnimalAge = (req, res) => {
  const { id } = req.params;
  const { age } = req.body;
  const patchedAnimal = AnimalsService.patchAnimalAge(id, age);
  if (!patchedAnimal) {
    return res.status(404).send({ status: "ERROR", message: "Животное не найдено" });
  }
  res.send({ status: "OK", data: patchedAnimal });
};

const deleteAnimal = (req, res) => {
  const { id } = req.params;
  const isDeleted = AnimalsService.deleteAnimal(id);
  if (!isDeleted) {
    return res.status(404).send({ status: "ERROR", message: "Животное не найдено" });
  }
  res.send({ status: "OK", message: "животное удалено" });
};

module.exports = {
  getAllAnimals,
  getOneAnimal,
  createNewAnimal,
  updateAnimal,
  patchAnimalAge,
  deleteAnimal,
};
