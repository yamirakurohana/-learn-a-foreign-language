const pages = [
    { title: "Login", file: "index-login.html", category: "Akun", desc: "Masuk ke aplikasi." },
    { title: "Register", file: "index-register.html", category: "Akun", desc: "Daftar akun baru." },
    { title: "Forgot Password", file: "index-forgot.html", category: "Akun", desc: "Reset kata sandi." },
    { title: "Jepang", file: "indexjp.html", category: "Bahasa", desc: "Materi bahasa Jepang untuk pemula." },
    { title: "Halaman 1", file: "index1.html", category: "Bahasa", desc: "Halaman materi 1." },
    { title: "Halaman 3", file: "index3.html", category: "Bahasa", desc: "Halaman materi 3." },
    { title: "Halaman 4", file: "index4.html", category: "Bahasa", desc: "Halaman materi 4." },
    { title: "Halaman 5", file: "index5.html", category: "Bahasa", desc: "Halaman materi 5." },
    { title: "Halaman 6", file: "index6.html", category: "Bahasa", desc: "Halaman materi 6." },
    { title: "Halaman 7", file: "index7.html", category: "Bahasa", desc: "Halaman materi 7." },
    { title: "Halaman 8", file: "index8.html", category: "Bahasa", desc: "Halaman materi 8." }
];

const pageGrid = document.getElementById("pageGrid");
const searchInput = document.getElementById("searchInput");
const resultInfo = document.getElementById("resultInfo");

function cardTemplate(page) {
    return `
        <article class="card">
            <h3>${page.title}</h3>
            <p>${page.desc}</p>
            <span class="meta">${page.category} • ${page.file}</span>
            <a class="btn" href="${page.file}">Buka Halaman</a>
        </article>
    `;
}

function render(query = "") {
    const keyword = query.trim().toLowerCase();
    const filtered = pages.filter((page) =>
        `${page.title} ${page.file} ${page.category} ${page.desc}`.toLowerCase().includes(keyword)
    );

    pageGrid.innerHTML = filtered.map(cardTemplate).join("");
    resultInfo.textContent = `${filtered.length} dari ${pages.length} halaman tampil`;
}

searchInput.addEventListener("input", (event) => {
    render(event.target.value);
});

render();
