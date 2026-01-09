const zod = require('zod');
//schema for todo item

const createTodo = zod.object({
    title: zod.string().min(1),
    description: zod.string().optional(),
    completed: zod.boolean().optional()
});

const updateTodo = zod.object({
    id: zod.string(),
});


module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}