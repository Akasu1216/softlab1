//=======================================================
 const openBtn = document.getElementById("open-login-btn");
    const closeBtn = document.getElementById("close-login-btn");
    const overlaye = document.getElementById("login-overlay");
    const form = document.getElementById("login-form");
    openBtn.addEventListener("click", () => {
        overlaye.classList.remove("hidden");
        setTimeout(() => {
            form.classList.remove("translate-x-full");
            form.classList.add("translate-x-0");
        }, 50);
    });
    closeBtn.addEventListener("click", () => {
        form.classList.add("translate-x-full");
        setTimeout(() => {
            overlaye.classList.add("hidden");
        }, 500);
    });
    overlaye.addEventListener("click", (e) => {
        if (e.target === overlaye) {
            form.classList.add("translate-x-full");
            setTimeout(() => {
                overlaye.classList.add("hidden");
            }, 500);
        }
    });

//=========================================================
const openRegisterBtn = document.getElementById("open-register-btn");
  const closeRegisterBtn = document.getElementById("close-register-btn");
  const registerOverlay = document.getElementById("register-overlay");
  const registerForm = document.getElementById("register-form");
  openRegisterBtn.addEventListener("click", () => {
      registerOverlay.classList.remove("hidden");
      setTimeout(() => {
          registerForm.classList.remove("translate-x-full");
          registerForm.classList.add("translate-x-0");
      }, 50);
  });
  closeRegisterBtn.addEventListener("click", () => {
      registerForm.classList.add("translate-x-full");
      setTimeout(() => {
          registerOverlay.classList.add("hidden");
      }, 500);
  });
  registerOverlay.addEventListener("click", (e) => {
      if (e.target === registerOverlay) {
          registerForm.classList.add("translate-x-full");
          setTimeout(() => {
              registerOverlay.classList.add("hidden");
          }, 500);
      }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !registerOverlay.classList.contains("hidden")) {
      registerForm.classList.add("translate-x-full");
      setTimeout(() => {
          registerOverlay.classList.add("hidden");
      }, 500);
    }
  });