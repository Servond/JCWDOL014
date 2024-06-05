function LocalStorage() {
  const token = localStorage.getItem("token");
  return (
    <>
      <div>
        <h1>Local Storage</h1>
        {token && <div>{token}</div>}
        <button onClick={() => localStorage.setItem("token", "yes")}>
          Set Local
        </button>
        <button onClick={() => localStorage.removeItem("token")}>
          Remove Local
        </button>
        <button onClick={() => localStorage.clear()}>Clear Local</button>
      </div>
    </>
  );
}

export default LocalStorage;
