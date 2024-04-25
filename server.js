const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // Порт, на котором будет запущен сервер

// Устанавливаем статическую директорию для обслуживания файлов из папки public
app.use(express.static(path.join(__dirname)));

// Обработка запроса на главную страницу
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Обработка запроса на вторую страницу
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "anketa.html"));
});

// Слушаем указанный порт
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
