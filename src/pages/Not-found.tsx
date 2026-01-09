export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-500 mb-6">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="text-primary underline hover:text-primary/80 transition-colors"
      >
        Go back home
      </a>
    </div>
  );
}
