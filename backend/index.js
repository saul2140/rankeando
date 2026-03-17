const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Equipos
app.get('/api/teams', async (req, res) => {
  try {
    const [teams] = await db.query('SELECT * FROM teams');
    const [players] = await db.query('SELECT * FROM players');
    const result = teams.map((team) => ({
      ...team,
      players: players.filter((p) => p.team_id === team.id),
    }));
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

// Ranking
app.get('/api/ranking', async (req, res) => {
  try {
    const [ranking] = await db.query('SELECT * FROM ranking ORDER BY mmr DESC');
    res.json(ranking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener ranking' });
  }
});

// Jugador por id
app.get('/api/ranking/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM ranking WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Jugador no encontrado' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener jugador' });
  }
});

app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000')); // 👈 siempre al final
