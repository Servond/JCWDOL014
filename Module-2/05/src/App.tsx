import { useState, createContext } from "react";

import HookState from "./hookState";
import HookEffect from "./hookEffect";
import HookRef from "./hookRef";
import HookMemo from "./hookMemo";
import HookReducer from "./hookReducer";
import HookCallback from "./hookCallback";

export interface IUser {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<IUser>({
  user: "",
  setUser: () => {},
});

function App() {
  const [user, setUser] = useState<string>("Budi");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <HookState />
        <HookEffect />
        <HookRef />
        <HookMemo />
        <HookReducer />
        <HookCallback />
      </UserContext.Provider>
      <hr />
      <input
        type="text"
        defaultValue={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </>
  );
}

export default App;
