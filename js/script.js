document
  .getElementById("signInForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(
        "https://auth-rg69.onrender.com/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      if (!response.ok) {
        if (response.status === 400) {
          alert("Bunday foydalanuvchi mavjud");
          return;
        }
        throw new Error(`HTTP xato! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        alert("Muvaffaqiyatli kirish");
      } else {
        alert("Bunday foydalanuvchi mavjud");
      }
    } catch (error) {
      console.error("Xato:", error);
      alert("Xatolik yuz berdi, iltimos qayta urinib ko'ring.");
    }
  });
