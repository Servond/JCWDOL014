function SessionStorage() {
  const token = sessionStorage.getItem("token");
  return (
    <>
      <div>
        <h1>Session Storage</h1>
        {token && <div>{token}</div>}
        <button onClick={() => sessionStorage.setItem("token", "yes")}>
          Set Session
        </button>
        <button onClick={() => sessionStorage.removeItem("token")}>
          Remove Session
        </button>
        <button onClick={() => sessionStorage.clear()}>Clear Session</button>
      </div>
    </>
  );
}

export default SessionStorage;
