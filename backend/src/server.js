import path from "path";

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", authRoutes);
//estados
const stateRoutes = require("./routes/stateRoutes");

app.use(stateRoutes);
// categorias
const categoryRoutes = require("./routes/categories");

app.use(categoryRoutes);

//importação de imagens
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.post("/user/signup", (req, res) => {
  const { name, email, password, state } = req.body;

  if (!name || !email || !password || !state) {
    return res.status(400).json({
      error: "Dados incompletos",
    });
  }

  // simulação de cadastro
  res.json({
    token: "token_fake_123",
  });
});

app.listen(501, () => {
  console.log("Backend rodando em http://localhost:501");
});
