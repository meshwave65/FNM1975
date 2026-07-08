import express from 'express'
import { addMourningRibbon } from './overlay'

const app = express()
app.use(express.json())

app.post('/api/overlay-ribbon', async (req, res) => {
  try {
    const { member_id, first_name } = req.body
    await addMourningRibbon(member_id, first_name)
    res.json({ success: true })
  } catch (error) {
    console.error('Erro no endpoint:', error)
    res.status(500).json({ error: 'Erro ao aplicar fita' })
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
