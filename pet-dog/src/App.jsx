import { useEffect, useState } from "react";
import axios from "axios";
import BreedCard from "./BreedCard";

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get("https://dogapi.dog/api/v2/breeds")
      .then(res => setBreeds(res.data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-purple-700 text-white py-6 shadow-lg mb-8">
        <h1 className="text-4xl font-extrabold text-center drop-shadow">🐾 Dog Breed Explorer</h1>
        <p className="text-center text-purple-100 mt-2">Discover and learn about different dog breeds!</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {breeds.map(breed => (
            <BreedCard
              key={breed.id}
              name={breed.attributes.name}
              description={breed.attributes.description}
              lifespan={`${breed.attributes.life.min} - ${breed.attributes.life.max} years`}
              weight={`${breed.attributes.male_weight.min} - ${breed.attributes.male_weight.max} kg`}
              hypoallergenic={breed.attributes.hypoallergenic}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purp-700 text-white py-4 mt-8 text-center shadow-inner">
        <span className="text-sm">&copy; {new Date().getFullYear()} Dog Breed Explorer. Made with React, Vite & Tailwind CSS.</span>
      </footer>
    </div>
  );
}

export default App;
