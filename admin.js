document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("totalRecipes")) {
      document.getElementById("totalRecipes").textContent = 0;
      document.getElementById("totalUsers").textContent = 0;
      document.getElementById("pendingReviews").textContent = 0;
    }

    if (document.getElementById("adminList")) {
      loadAdmins();
    }
  });

  function loadAdmins() {
    const list = document.getElementById("adminList");
    const admins = JSON.parse(localStorage.getItem("admins") || "[]");
    list.innerHTML = "";
    admins.forEach((admin, index) => {
      const li = document.createElement("li");
      li.textContent = admin;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.onclick = () => {
        admins.splice(index, 1);
        localStorage.setItem("admins", JSON.stringify(admins));
        loadAdmins();
      };
      li.appendChild(removeBtn);
      list.appendChild(li);
    });
  }

  function addAdmin() {
    const nameInput = document.getElementById("adminName");
    const name = nameInput.value.trim();
    if (name) {
      const admins = JSON.parse(localStorage.getItem("admins") || "[]");
      admins.push(name);
      localStorage.setItem("admins", JSON.stringify(admins));
      nameInput.value = "";
      loadAdmins();
    } else {
      alert("Please enter a valid admin name.");
    }
  }
