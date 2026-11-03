const { exec } = require("node:child_process");

function checkPotsgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPotsgres();
      return;
    }
    console.log("\nPostgres está pronto e aceitando conexões!\n");
  }
}

process.stdout.write("\n\nAguardando Postgres aceitar conexões");
checkPotsgres();
