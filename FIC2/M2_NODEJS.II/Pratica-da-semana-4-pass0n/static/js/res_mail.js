const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {

  e.preventDefault();
  const email = form.elements.email.value;
  const assunto = form.elements.assunto.value;
  const mensagem = form.elements.mensagem.value;

  try {
    const response = await axios.post("/sendemail", { email, assunto, mensagem });
    const data = await response.data;

    if (data.erro) {
      swal("Oops!", "Ocorreu um erro ao enviar o email!", "error");
    } else {
      swal("Tudo certo!", "E-mail enviado com sucesso!", "success");
    }
  } catch (error) {
    console.log(error);
  }
});
