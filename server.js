
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Temporary storage for Valorant characters
let characters = [
  { id: 1, Name: "Jett", Role: "Duelist" },
  { id: 2, Name: "Sage", Role: "Sentinel" },
  { id: 3, Name: "Omen", Role: "Controller" },
  { id: 4, Name: "Sova", Role: "Initiator" }
];

let nextId = 5;

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Valorant Characters API is running!" });
});

// 1. GET all characters
app.get("/api/characters", (req, res) => {
  res.status(200).json(characters);
});

// 2. GET one character by ID
app.get("/api/characters/:id", (req, res) => {
  const character = characters.find(
    c => c.id === Number(req.params.id)
  );

  if (!character) {
    return res.status(404).json({
      message: "Character not found"
    });
  }

  res.status(200).json(character);
});

// 3. POST create a character
app.post("/api/characters", (req, res) => {
  const { Name, Role } = req.body;

  if (
    typeof Name !== "string" || !Name.trim() ||
    typeof Role !== "string" || !Role.trim()
  ) {
    return res.status(400).json({
      message: "Name and Role are required"
    });
  }

  const newCharacter = {
    id: nextId++,
    Name: Name.trim(),
    Role: Role.trim()
  };

  characters.push(newCharacter);

  res.status(201).json(newCharacter);
});

// 4. PUT update a character
app.put("/api/characters/:id", (req, res) => {
  const character = characters.find(
    c => c.id === Number(req.params.id)
  );

  if (!character) {
    return res.status(404).json({
      message: "Character not found"
    });
  }

  const { Name, Role } = req.body;

  if (
    typeof Name !== "string" || !Name.trim() ||
    typeof Role !== "string" || !Role.trim()
  ) {
    return res.status(400).json({
      message: "Name and Role are required"
    });
  }

  character.Name = Name.trim();
  character.Role = Role.trim();

  res.status(200).json(character);
});

// 5. DELETE a character
app.delete("/api/characters/:id", (req, res) => {
  const index = characters.findIndex(
    c => c.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Character not found"
    });
  }

  const deletedCharacter = characters.splice(index, 1)[0];

  res.status(200).json({
    message: "Character deleted successfully",
    character: deletedCharacter
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
