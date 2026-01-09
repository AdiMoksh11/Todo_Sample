
export function Todos({ todos }) {
    return <>

        {todos.map((todo) => {
            return<div>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    <button>{todo.completed ? "Completed" : "Mark Complete"}</button>
                </div>
            }
        )}
    
    </>
} 