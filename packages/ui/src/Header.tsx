export const Header = () => {
  return (
    <header className="py-4 text-center bg-red-500 border-b-8 border-stone-800 dark:border-stone-300 font-pixel">
      <div className="flex md:flex md:flex-grow flex-row justify-end space-x-1 mr-6">
        <div className="flex flex-col">
          <a href="/api/auth/login">Login</a>
          <a href="/api/auth/logout">Logout</a>
        </div>
      </div>
      <h1 className="text-4xl mb-3 text-amber-200">poke-next</h1>
    </header>
  );
};
