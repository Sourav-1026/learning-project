import { use } from "react";

export default function Friend({ friend }) {
  const friend = use(friend);
  const { name, username, email, phone, website } = friend;
  return (
    <div className="card">
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
}
