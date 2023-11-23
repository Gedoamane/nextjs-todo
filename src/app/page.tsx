
import Link from 'next/link';


export const revalidate = 3600; // revalidate at most every hour

export default async function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
     
      <Link href={"/todos"} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View todos 
      </Link>

    </main>
  )
}
