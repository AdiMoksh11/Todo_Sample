//initializing empty express app
const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
const { Todo} = require('./db');
const cors = require('cors');


//ensuring that express can parse json data specially in post endpoints
app.use(express.json());
app.use(cors());


app.post("/todo", async (req, res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        return res.status(411).json({
            message: "Invalid payload",
            error: parsePayload.error.errors
        });
    }

    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({message: "Todo created successfully"});
}) 

app.get("/todo", async (req, res)=>{
    const alltodos = await Todo.find({});
    res.json({data: alltodos});
})

app.put("/completed", async (req, res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload); 
    if(!parsePayload.success){
        return res.status(411).json({
            message: "Invalid payload",
            error: parsePayload.error.errors
        });
    }
    await Todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        message: "Todo marked as completed"
    })
})

const port = 3000;
app.listen(port);