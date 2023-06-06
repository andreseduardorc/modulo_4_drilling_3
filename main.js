const fromField = document.getElementById("from-field");
const toField = document.getElementById("to-field");
const ccEmails = document.querySelectorAll(".cc-email");
const subjectField = document.getElementById("subject-field");
const messageField = document.getElementById("message-field");

function enviarCorreo() {
  const from = fromField.value;
  const to = toField.value;
  const cc = [...ccEmails].map((email) => email.value).join(", ");
  const subject = subjectField.value;
  const message = messageField.value;

  console.log(`To: ${to}`);
  console.log(`From: ${from}`);
  console.log(`CC:`);
  for (const ccEmail of ccEmails) {
    console.log(ccEmail.value);
  }
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
}

const enviarBtn = document.getElementById("enviar-btn");
enviarBtn.addEventListener("click", enviarCorreo);
