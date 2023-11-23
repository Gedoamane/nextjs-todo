
import Card from '@/components/Card';
import { sql } from '@vercel/postgres';


export const revalidate = 60; // revalidate at most every hour

export default async function Todos() {

  const { rows: todos, fields } = await sql`SELECT * FROM todos;`;


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {
        todos && todos.length > 0 ?
          <div className='flex flex-wrap gap-4'>

            {
              todos.map(todo => (
                <Card
                  key={"todo-" + todo.todo_id}
                  todo_id={todo.todo_id}
                  description={todo.description}
                  status={todo.status}
                  dueDate={todo.due_date.toString()}
                  task={todo.task}
                />
              ))
            }

          </div>
          : 
          <p> Todo list is empty</p>
      }

    </main>
  )
}
