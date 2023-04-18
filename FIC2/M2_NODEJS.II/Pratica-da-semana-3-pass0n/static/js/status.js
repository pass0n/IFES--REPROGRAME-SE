const submit_btn = document.getElementById("btn_upload");
const form = document.getElementById("upload_form");
const status_img = document.getElementById("status");

submit_btn.addEventListener("click", async function() {
  try {
    const form_data = new FormData(form);
    const response = await axios.post("/upload", form_data);
    const data = response.data;
    if (data.result) {
      status_img.src = "../static/img/err.png";
      status_img.alt = "oops! houve um erro no envio.";
    } else {
      status_img.src = "../static/img/success.png";
      status_img.alt = "enviado com sucesso!";
    }
  } catch (error) {
    console.log(error);
  }
});

const label = document.getElementById("label_up");
const input = document.getElementById("input_file")
const preview = document.getElementById("preview");

input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      preview.setAttribute("src", reader.result);
      preview.style.display = "block";
      label.style.display = "none";
    });
    reader.readAsDataURL(file);
  };
});

