const cors = require("cors")
const express = require("express")
const pool = require("./indexbd.js")
const bcrypt = require("bcryptjs")
const PORT = process.env.PORT || 3000
const app = express()
const axios = require("axios");


app.use(cors())
app.use(express.json())
app.get("/table1", async (req, res) => {
    try {
        const addToods = await pool.query("SELECT * FROM table1")
        res.json(addToods.rows)
    }
    catch(err) {
        console.error(err.message)
        res.status(500).json({ error: "Server error" })
    }
})

app.post("/seo-request", async (req, res) => {
    try {
        const { name, email, website, agreement } = req.body;

        // Валидация
        if (!name || !email || !website) {
            return res.status(400).json({
                success: false,
                message: "Все поля обязательны для заполнения"
            });
        }

        if (!agreement) {
            return res.status(400).json({
                success: false,
                message: "Необходимо принять соглашение"
            });
        }

        const result = await pool.query(
            `INSERT INTO seo_requests (name, email, website, agreement)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [name, email, website, agreement]
        );

        res.json({
            success: true,
            message: "Заявка на SEO анализ отправлена!",
            data: result.rows[0]
        });

    } catch (err) {
        console.error("SEO request error:", err.message);
        res.status(500).json({
            success: false,
            message: "Ошибка сервера"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})