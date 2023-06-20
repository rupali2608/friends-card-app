function Details({ user }) {
  const { name, website } = user;
  return (
    <div
      className="DetailsContainer"
      style={{
        padding: "10px",
        backgroundColor: "#e5e4d7",
        fontSize: "15px",
        border: "1px solid",
        boxShadow: "5px #888888",
      }}
    >
      <b>Name</b> - {name}
      <br />
      <br />
      <b> Website </b> - {website}
    </div>
  );
}

export default Details;
