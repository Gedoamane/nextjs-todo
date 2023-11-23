
import Card from '@/components/Card';
import { sql } from '@vercel/postgres';
import Link from 'next/link';


export const revalidate = 60; // revalidate at most every hour

export default async function Todo({ params : {slug} }: { params: { slug: string } }) {

// Fix this, as it is bad for sql injection
  const { rows: todos, fields } = await sql`SELECT * FROM todos WHERE todo_id=${slug}`;


  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 p-24">

        <div className='flex justify-end w-full'>
              <Link href={"/todos"} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                 Back 
                  <svg className="rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
              </Link>
        </div>

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
