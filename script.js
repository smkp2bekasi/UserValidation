class LoginForm {
  constructor(formId, participants) {
    this.form = document.getElementById(formId);
    this.participants = participants;
    this.emailInput = document.getElementById("email");
    this.passwordInput = document.getElementById("password");
    this.emailError = document.getElementById("emailError");
    this.passwordError = document.getElementById("passwordError");

    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault(); // Mencegah form dari submit

    // Menghapus pesan kesalahan sebelumnya
    this.emailError.classList.remove("show");
    this.passwordError.classList.remove("show");

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    // Validasi ID Peserta dan Kata Sandi
    const participant = this.participants.find(
      (p) => p.id === email && p.password === password
    );

    if (!participant) {
      if (!this.participants.some((p) => p.id === email)) {
        this.emailError.textContent = "ID peserta salah";
        this.emailError.classList.add("show");
      }

      if (!this.participants.some((p) => p.password === password)) {
        this.passwordError.textContent = "Kata sandi salah";
        this.passwordError.classList.add("show");
      }
    } else {
      alert("Login berhasil!");
      // Anda bisa menambahkan logika lain di sini, seperti redirect ke halaman lain
    }
  }
}

// Data peserta
const participants = [
  { nama: "Astri Merliana", id: "140904153", password: "021150019" },
  { nama: "Alisya Eka Fratiwi", id: "100606352", password: "021150028" },
  { nama: "Ananda Shofie Amelia", id: "050406478", password: "021150037" },
  { nama: "Aura Nurman", id: "040406927", password: "021150046" },
];

// Inisialisasi form login
const loginForm = new LoginForm("loginForm", participants);
