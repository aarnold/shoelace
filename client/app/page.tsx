import { CalendarIcon } from '@heroicons/react/24/solid';
import SignInButton from './components/SignInButton';

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <CalendarIcon className="h-8 w-8 text-white" />
          <h1 className="ml-2 text-2xl">Shoelace</h1>
        </div>
        <SignInButton />
      </header>

      <main>
        <div className="text-center mt-64">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Shoelace</h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Your own personal AI assistant for managing your time.</p>
        </div>
      </main>
    </div>
  );
}