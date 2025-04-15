const rowCardEl = document.getElementById("row-card");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

for (const member of teamMembers) {
  const { name, role, email, img } = member;

  let cardMember = `
  
   <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card mb-3 bg-dark text-white" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    id="image-member-card"
                    src="./${img}"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 id="name-member-card" class="card-title fw-bold">
                      ${name}
                    </h5>
                    <p id="role-member-card" class="card-text">
                      ${role}
                    </p>
                    <p id="email-member-card" class="card-text text-primary">
                      ${email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
  `;

  rowCardEl.innerHTML += cardMember;
}
