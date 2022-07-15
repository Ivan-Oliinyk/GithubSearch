import { useAppSelector } from "../hooks/redux";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.github);

  if (favorites.length === 0) {
    return <p className="text-center">No items in favorites.</p>;
  }

  console.log(favorites);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map((f) => (
          <li key={f} className="mb-3">
            <a
              href={f}
              target="_blank"
              className="px-3 py-2 hover:shadow-md hover:bg-gray-100 translate-all"
            >
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
