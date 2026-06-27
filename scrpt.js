// Generate Resume
function generateResume() {

  document.getElementById("rName").innerText =
    document.getElementById("name").value;

  document.getElementById("rRole").innerText =
    document.getElementById("role").value;

  document.getElementById("rEmail").innerText =
    document.getElementById("email").value;

  document.getElementById("rPhone").innerText =
    document.getElementById("phone").value;

  document.getElementById("rProjects").innerText =
    document.getElementById("projects").value;

  document.getElementById("rAbout").innerText =
    document.getElementById("about").value;

  // Skills
  let skills = document.getElementById("skills").value.split(",");
  let list = document.getElementById("rSkills");
  list.innerHTML = "";

  skills.forEach(skill => {
    let li = document.createElement("li");
    li.innerText = skill.trim();
    list.appendChild(li);
  });
}

// Photo Upload Preview
document.getElementById("photo").addEventListener("change", function () {
  let file = this.files[0];

  if (file) {
    let reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("profilePic").src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});

// AI Summary Generator (Simple)
function generateAISummary() {
  let role = document.getElementById("role").value;
  let skills = document.getElementById("skills").value;

  document.getElementById("about").value =
    `I am a passionate ${role} skilled in ${skills}. I am looking for internship opportunities to apply my knowledge in real-world projects.`;

  generateResume();
}

// Save Data LocalStorage
function saveData() {
  let data = {
    name: name.value,
    role: role.value,
    email: email.value,
    phone: phone.value,
    skills: skills.value,
    projects: projects.value,
    about: about.value
  };

  localStorage.setItem("resumeData", JSON.stringify(data));
  alert("Resume Data Saved Successfully!");
}

// Download PDF
function downloadPDF() {
  html2pdf().from(document.getElementById("resume"))
    .save("Advanced_Resume.pdf");
}

// Load Saved Data on Refresh
window.onload = function () {
  let saved = localStorage.getItem("resumeData");

  if (saved) {
    let data = JSON.parse(saved);

    name.value = data.name;
    role.value = data.role;
    email.value = data.email;
    phone.value = data.phone;
    skills.value = data.skills;
    projects.value = data.projects;
    about.value = data.about;

    generateResume();
  }
};
