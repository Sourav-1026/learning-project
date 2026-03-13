// import { use } from "react";

export default function Friend({ friend }) {
  //   const friend = use(friend);
  const { name } = friend;
  return (
    <div className="card">
      <p>Name: {name}</p>
    </div>
  );
}
