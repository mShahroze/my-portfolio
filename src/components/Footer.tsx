export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Muhammad S. Bilal. All
          rights reserved.
        </p>
        <p className="mt-2">
          Designed with <span className="text-red-500">&hearts;</span>{' '}
          using Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
