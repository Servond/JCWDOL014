import { useCookies } from "react-cookie";

function Cookie() {
  const [cookies, setCookies, removeCookie] = useCookies(["nama"]);
  return (
    <div>
      <h1>Cookie</h1>
      {cookies && <div>{cookies.nama}</div>}
      <button onClick={() => setCookies("nama", "budi")}>Set Cookie</button>
      <button onClick={() => removeCookie("nama")}>Remove Cookie</button>
    </div>
  );
}

export default Cookie;
