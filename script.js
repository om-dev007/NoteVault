const Feature = document.getElementById("Feature");
      const Contact = document.getElementById("Contact");
      const Login = document.getElementById("Login");
      const Signup = document.getElementById("Signup");
      const menu = document.getElementById("menu");
      const cross = document.getElementById("cross");
      const headerLink = document.getElementById("header-link");

      menu.addEventListener("click", () => {
        if (window.innerWidth <= 800) {
          headerLink.classList.add("open");
          cross.style.display = "block";
          menu.style.display = "none";
        }
      });

      cross.addEventListener("click", () => {
        if (window.innerWidth <= 800) {
          menu.style.display = "block";
          cross.style.display = "none";
          headerLink.classList.remove("open");
        }
      });

      if (window.innerWidth <= 800) {
        Feature.addEventListener("click", () => {
          headerLink.classList.remove("open");
          menu.style.display = "block";
          cross.style.display = "none";
        });
        Contact.addEventListener("click", () => {
          headerLink.classList.remove("open");
          menu.style.display = "block";
          cross.style.display = "none";
        });
        Signup.addEventListener("click", () => {
          headerLink.classList.remove("open");
          menu.style.display = "block";
          cross.style.display = "none";
        });
        Login.addEventListener("click", () => {
          headerLink.classList.remove("open");
          menu.style.display = "block";
          cross.style.display = "none";
        });
      }