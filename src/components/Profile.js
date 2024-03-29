import { useState } from "react";

import { useUser } from "../context/UserContext";

function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        username: "arslanng",
        bio: "lorem ipsum dolor",
      });
      setLoading(false);
    }, 1500);
  };
  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "loading..." : "Login"}
        </button>
      )}
      {JSON.stringify(user)}

      {user && <button onClick={() => setUser(null)}>Logout</button>}
    </div>
  );
}

export default Profile;
