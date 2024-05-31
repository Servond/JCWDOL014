import { useEffect, useRef, useContext } from "react";
import { UserContext, IUser } from "../App";

function HookRef() {
  const input1Ref = useRef<HTMLInputElement | null>(null);
  const input2Ref = useRef<HTMLInputElement | null>(null);
  const user = useContext<IUser>(UserContext);

  useEffect(() => {
    if (input2Ref.current) input2Ref.current.focus();
  }, []);

  return (
    <div>
      <h1>Use Ref</h1>
      <div>Hello {user.user}</div>
      <input type="text" ref={input1Ref} />
      <button
        onClick={() => {
          if (input1Ref.current) {
            input1Ref.current.value = input2Ref.current
              ? input2Ref.current.value
              : "";
            input1Ref.current.focus();
          }
        }}
      >
        Copy Text
      </button>
      <input type="text" ref={input2Ref} />
      <input type="text" onChange={(e) => user.setUser(e.target.value)} />
    </div>
  );
}

export default HookRef;
