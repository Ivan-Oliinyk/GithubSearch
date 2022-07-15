import React, { useState } from "react";
import { useActions } from "../hooks/action";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavorite, removeFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.github);

  const [isFav, seetIsFav] = useState(favorites.includes(repo.html_url));

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavorite(repo.html_url);
    seetIsFav(true);
  };

  const removeFromavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavorite(repo.html_url);
    seetIsFav(false);
  };

  return (
    <div className="border py-3 px-5 rounded cursor-pointer mb-2 hover:shadow-md hover:bg-gray-100 translate-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-small font-thin">{repo?.description}</p>

        {!isFav ? (
          <button
            className="py-2 px-4 mt-2 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all"
            onClick={(e) => addToFavorite(e)}
          >
            Add to favorite
          </button>
        ) : (
          <button
            className="py-2 px-4 mt-2 bg-red-400 rounded hover:shadow-md transition-all"
            onClick={(e) => removeFromavorite(e)}
          >
            Remove from favorite
          </button>
        )}
      </a>
    </div>
  );
};

export default RepoCard;
