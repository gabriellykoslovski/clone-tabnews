function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundColor: "#F5BC39",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#faf5e8ff",
            padding: "7rem 5rem 7rem 5rem",
            borderRadius: "300px",
            boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          <img
            src="/images/warning.png"
            style={{ width: "5rem", height: "5rem" }}
          />
          <h1>Em construção!</h1>
          <h3>
            Este site ainda está em desenvolvimento
            <br />e em breve estará disponível, até mais!
          </h3>
        </div>
      </div>
    </main>
  );
}

export default Home;
