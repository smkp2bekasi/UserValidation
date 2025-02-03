```js
let participants = [
  { nama: "Astri Merliana", id: "140904153", password: "021150019" },
  { nama: "Alisya Eka Fratiwi", id: "100606352", password: "021150028" },
  { nama: "Ananda Shofie Amelia", id: "050406478", password: "021150037" },
  { nama: "Aura Nurman", id: "040406927", password: "021150046" },
];
```

```js
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari submit

    // Data validasi sederhana (misalnya, ID dan kata sandi harus '12345' dan 'password')
    const validID = "12345";
    const validPassword = "password";

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Menghapus pesan kesalahan sebelumnya
    emailError.classList.remove("show");
    passwordError.classList.remove("show");

    // Validasi ID Peserta
    if (emailInput.value !== validID) {
      emailError.textContent = "ID peserta salah";
      emailError.classList.add("show");
    }

    // Validasi Kata Sandi
    if (passwordInput.value !== validPassword) {
      passwordError.textContent = "Kata sandi salah";
      passwordError.classList.add("show");
    }

    // Jika semua validasi berhasil
    if (
      emailInput.value === validID &&
      passwordInput.value === validPassword
    ) {
      alert("Login berhasil!");
      // Anda bisa menambahkan logika lain di sini, seperti redirect ke halaman lain
    }
  });
```

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Halaman Login</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <div class="login-container">
      <h2 class="login-title">Validasi Peserta Ujian</h2>
      <form id="loginForm">
        <div class="mb-3">
          <label for="email" class="form-label">ID Peserta</label>
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Masukkan ID Peserta"
            autocomplete="off"
            required
            pattern="\d+"
            inputmode="numeric"
          />
          <div id="emailError" class="error-message"></div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Kata Sandi</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Masukkan kata sandi"
            autocomplete="off"
            required
          />
          <div id="passwordError" class="error-message"></div>
        </div>
        <button type="submit" class="btn btn-primary w-100">Masuk</button>
      </form>
    </div>

    <script src="formValidation.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

---

Gabungkan kode JavaScript menjadi satu file dengan pengorganisasian menggunakan kelas atau fungsi berdasarkan fungsionalitas yang sama.