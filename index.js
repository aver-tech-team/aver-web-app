import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/login', function(req, res){
    res.status(404).sendFile(path.join(__dirname, "/dist/index.html"));
  });  

app.get('/signup', function(req, res){
res.status(404).sendFile(path.join(__dirname, "/dist/index.html"));
});  

app.get('*', function(req, res){
    res.status(404).sendFile(path.join(__dirname, "error.html"));
  });  

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})