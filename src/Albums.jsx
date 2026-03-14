import { use } from "react";
import Album from "./Album";

export default function Albums({ albumsPromise }) {
  const albums = use(albumsPromise);
  console.log(albums);
  return (
    <div className="card">
      <p>These are the album list: {albums.length}</p>
      {albums.map((album) => (
        <Album key={album.id} album={album}></Album>
      ))}
    </div>
  );
}
