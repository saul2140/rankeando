const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Obtener todos los equipos con jugadores
app.get('/api/teams', async (req, res) => {
  try {
    const [teams] = await db.query('SELECT * FROM teams');
    const [players] = await db.query('SELECT * FROM players');

    // Agrupar jugadores por equipo
    const result = teams.map((team) => {
      return {
        ...team,
        players: players.filter((p) => p.team_id === team.id),
      };
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'));
