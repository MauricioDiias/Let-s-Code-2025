const mysql = require('mysql2');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const conection = mysql.createConnection(process.env.MYSQL_PUBLIC_URL);

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

/// # Gerenciamento de Tabelas

app.get('/', async (req,res) => {
    try {
        const [rows] =  await conection.promise().query('SELECT NOW()');
        return res.json(rows[0]);
    
    } catch (error) {
        console.log(error);
        return res.status(500).send('Erro ao buscar data');
    }

})

app.post("/create_table",async (req,res) => {
    try {
        const sql = 'CREATE TABLE IF NOT EXISTS tarefas_mauricio (id INT AUTO_INCREMENT PRIMARY KEY, tarefas VARCHAR(255), concluido BOOLEAN DEFAULT false)';
        const [rows,fields] =  await conection.promise().query(sql);
        console.log(rows);
        console.log(fields);
        return res.json(rows[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Erro ao criar tabela');
    }
})

app.get('/tabelas',async (req,res) => {
    try {
        const [rows] =  await conection.promise().query('SHOW TABLES');
        return res.json(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Erro ao buscar tabelas');
    }
})

app.post('/informacoes',async (req,res) => {
    try {
        const  nomeTabela  = req.body.nomeTabela;
        const sql = 'SELECT * FROM '+ nomeTabela;
        const [result] = await conection.promise().query(sql);
        return res.json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Erro ao inserir informações');
    }
})



//  # end points API CRUD #

app.post('/inserir',async (req,res) => {
    try {
        const {tarefa} = req.body;
        const sql = 'INSERT INTO tarefas_mauricio (tarefas) VALUES (?)';
        const [result] = await conection.promise().query(sql,[tarefa]);
        return res.json({"message":"Tarefa inserida com sucesso"});
    } catch (error) {
        console.log(error);
        return res.status(500).send('Erro ao inserir informações');
    }
})

app.get('/tarefas',async (req,res) => {
    try {
        const sql = 'SELECT * FROM tarefas_mauricio';
        const [result] = await conection.promise().query(sql);
        return res.json(result);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Erro ao buscar tarefas');
    }
})

app.patch('/tarefas/:id',async (req,res) => {
    try {
        const {id} = req.params;
        const {tarefa} = req.body;
        const sql = 'UPDATE tarefas_mauricio SET tarefas = ? WHERE id = ?';
        const [result] = await conection.promise().query(sql,[tarefa,id]);
        return res.json({"message":"Tarefa atualizada com sucesso"});
    } catch (error) {
        console.log(error);
        return res.status(500).send('Erro ao atualizar tarefa');
    }
})

app.patch('/concluido/:id',async (req,res) => {
    try {
        const {id} = req.params;
        const {concluido} = req.body;
        const sql = 'UPDATE tarefas_mauricio SET concluido = ? WHERE id = ?';
        const [result] = await conection.promise().query(sql,[concluido,id]);
        return res.json({"message":"Status da tarefa atualizada com sucesso"});
    } catch (error) {
        console.log(error);
        return res.status(500).send('Erro ao atualizar status da tarefa');
    }
})


app.delete('/deletarTarefa/:id',async (req,res) => {
    try {
        const {id} = req.params;
        const sql = 'DELETE FROM tarefas_mauricio WHERE id = ?';
        const [result] = await conection.promise().query(sql,[id]);
        return res.json({"message":"Tarefa deletada com sucesso"});
    } catch (error) {
        console.log(error);
        return res.status(500).send('Erro ao deletar tarefa');
    }
})



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});