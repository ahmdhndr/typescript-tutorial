import React, { useState, useRef, useEffect } from "react";

const users = [
  { name: "Eru", age: 28 },
  { name: "Hendar", age: 28 },
  { name: "Achmad", age: 28 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => user.name.toLowerCase() === name.toLowerCase());
    setUser(foundUser);
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h3>User Search</h3>
      <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>
        {!user ? (
          <p>No user found to show</p>
        ) : (
          <>
            <h4>User Details</h4>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
