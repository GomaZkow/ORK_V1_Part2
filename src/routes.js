const express = require("express");
const AnimalsController = require("./controllers");

const router = express.Router();

router.get("/", AnimalsController.getAllAnimals);
router.get("/:id", AnimalsController.getOneAnimal);
router.post("/", AnimalsController.createNewAnimal);
router.put("/:id", AnimalsController.updateAnimal);
router.patch("/:id", AnimalsController.patchAnimalAge);
router.delete("/:id", AnimalsController.deleteAnimal);

module.exports = router;
