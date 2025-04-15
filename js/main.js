const rowCardEl = document.getElementById("row-card");
const nameMemberInput = document.getElementById("name-member-input");
const roleMemberInput = document.getElementById("role-member-input");
const emailMemberInput = document.getElementById("email-member-input");
const imgMemberInput = document.getElementById("img-member-input");
const memberForm = document.getElementById("member-form");

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

/**
 *
 * Metodo per generare un elemento HTML passando un oggetto e andando ad inserire le sue proprietà all' interno
 *
 * @param {object} member passiamo un parametro di tipo oggetto
 * @returns {string} ritorna una stringa
 */
const generateMemberCard = (member) => {
  const { name, role, email, img } = member;

  const memberCard = `
  
  <div class="col-sm-12 col-md-6  col-xl-4">
           <div class="card mb-3 bg-dark text-white" style="max-width: 540px">
             <div class="row g-0">
               <div class="col-md-4">
                 <img
                   id="image-member-card"
                   src="./${img}"
                   class="img-fluid h-100 w-100"
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

  return memberCard;
};

// Ciclo for of per generare le card all'interno della pagina utilizzando il metodo "generateMemberCard"
for (const member of teamMembers) {
  rowCardEl.innerHTML += generateMemberCard(member);
}

memberForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameMemberInput.value;
  const role = roleMemberInput.value;
  const email = emailMemberInput.value;
  const img = imgMemberInput.value;

  const newMember = { name, role, email, img };

  rowCardEl.innerHTML += generateMemberCard(newMember);
});
