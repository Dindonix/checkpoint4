const express = require("express");

const router = express.Router();

const { verifyPassword, verifyToken } = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const projectControllers = require("./controllers/projectControllers");
const userControllers = require("./controllers/userControllers");

router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);

router.get("/api/projects", projectControllers.browse);
router.get("/api/projects/:id", verifyToken, projectControllers.read);
router.put("/api/projects/:id", verifyToken, projectControllers.edit);
router.post("/api/projects", verifyToken, projectControllers.add);
router.delete("/api/projects/:id", verifyToken, projectControllers.destroy);

module.exports = router;
