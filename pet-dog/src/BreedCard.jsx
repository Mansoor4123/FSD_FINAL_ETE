function BreedCard({ name, description, lifespan, weight, hypoallergenic }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
      <h2 className="text-xl font-bold text-purple-600 mb-2">{name}</h2>
      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
        {description || "No description available."}
      </p>

      <div className="space-y-1 text-sm">
        <p><span className="font-semibold">📅 Lifespan:</span> {lifespan}</p>
        <p><span className="font-semibold">⚖ Weight:</span> {weight}</p>
        <p>
          <span className="font-semibold">🌿 Hypoallergenic:</span>{" "}
          <span className={hypoallergenic ? "text-green-600" : "text-red-600"}>
            {hypoallergenic ? "Yes " : "No "}
          </span>
        </p>
      </div>
    </div>
  );
}

export default BreedCard;
