document.getElementById("submit").onclick = function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var status = document.getElementById("status").value;

  fetch(
    "https://automation.quickwork.co/staticwebhook/api/http_app/notify/66b5044a0a026a3b47b64933/sample-5",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        status: status,
      }),
    }
  )
    .then(() => {
      alert("Form submitted successfully");
    })
    .error(() => {
      alert("Error submitting form");
    })
    .finally(() => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("status").value = "";
    });
};
