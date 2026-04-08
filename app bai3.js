/* ============================================
   CineScope — app.js
   Bài 2 + Bài 3: Logic, Modal, Dark/Light Mode
============================================ */

// ===========================================
// 1. DỮ LIỆU PHIM (mở rộng với thông tin chi tiết)
// ===========================================
const movies = [
  {
    id: 1, title: "Avengers: Endgame", year: 2019, rating: 8.4,
    genres: ["Hành động", "Khoa học viễn tưởng"], emoji: "🦸",
    color: "rgba(224,85,85,0.08)",
    director: "Anthony & Joe Russo",
    cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    duration: "181 phút", country: "Mỹ",
    desc: "Sau sự kiện thảm khốc của Infinity War, các Avengers còn sống tập hợp lại để thực hiện một nhiệm vụ tuyệt vọng nhằm đảo ngược hành động của Thanos và khôi phục trật tự của vũ trụ."
  },
  {
    id: 2, title: "Titanic", year: 1997, rating: 7.9,
    genres: ["Tình cảm", "Chính kịch"], emoji: "🚢",
    color: "rgba(85,145,224,0.08)",
    director: "James Cameron",
    cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
    duration: "194 phút", country: "Mỹ",
    desc: "Một thiếu nữ quý tộc yêu một chàng nghệ sĩ nghèo trên chuyến hành trình định mệnh của con tàu sang trọng nhất lịch sử — con tàu được mệnh danh là không thể chìm."
  },
  {
    id: 3, title: "The Dark Knight", year: 2008, rating: 9.0,
    genres: ["Hành động", "Tội phạm"], emoji: "🦇",
    color: "rgba(60,60,80,0.15)",
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
    duration: "152 phút", country: "Mỹ / Anh",
    desc: "Batman phải đối mặt với tên tội phạm hỗn loạn nhất Gotham từng chứng kiến — The Joker — kẻ không có mục tiêu nào ngoài việc đẩy thành phố vào vực thẳm hỗn loạn tuyệt đối."
  },
  {
    id: 4, title: "Inception", year: 2010, rating: 8.8,
    genres: ["Khoa học viễn tưởng", "Hồi hộp"], emoji: "🌀",
    color: "rgba(80,180,180,0.08)",
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    duration: "148 phút", country: "Mỹ / Anh",
    desc: "Một tên trộm chuyên đánh cắp bí mật từ sâu trong tiềm thức khi con người đang mơ nhận được cơ hội chuộc tội — nhưng lần này nhiệm vụ là cấy một ý tưởng vào đầu mục tiêu."
  },
  {
    id: 5, title: "Toy Story", year: 1995, rating: 8.3,
    genres: ["Hoạt hình", "Gia đình"], emoji: "🤠",
    color: "rgba(100,200,100,0.08)",
    director: "John Lasseter",
    cast: "Tom Hanks, Tim Allen, Don Rickles",
    duration: "81 phút", country: "Mỹ",
    desc: "Khi đứa trẻ rời phòng, những món đồ chơi trở nên sống động. Chú cao bồi Woody bỗng phải cạnh tranh vị trí yêu thích với món đồ chơi vũ trụ mới — Buzz Lightyear."
  },
  {
    id: 6, title: "Interstellar", year: 2014, rating: 8.6,
    genres: ["Khoa học viễn tưởng", "Chính kịch"], emoji: "🌌",
    color: "rgba(85,145,224,0.08)",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    duration: "169 phút", country: "Mỹ / Anh",
    desc: "Một nhóm phi hành gia vượt qua lỗ sâu đục để tìm kiếm hành tinh mới có thể cứu nhân loại khỏi nạn tuyệt chủng — trong khi thời gian tương đối trở thành kẻ thù tàn nhẫn nhất."
  },
  {
    id: 7, title: "The Godfather", year: 1972, rating: 9.2,
    genres: ["Tội phạm", "Chính kịch"], emoji: "🕴️",
    color: "rgba(200,160,80,0.08)",
    director: "Francis Ford Coppola",
    cast: "Marlon Brando, Al Pacino, James Caan",
    duration: "175 phút", country: "Mỹ",
    desc: "Câu chuyện hùng tráng về triều đại của gia tộc Corleone — từ đỉnh cao quyền lực đến sự sụp đổ bi thảm, khắc họa sâu sắc bản chất con người trong thế giới tội phạm có tổ chức."
  },
  {
    id: 8, title: "Forrest Gump", year: 1994, rating: 8.8,
    genres: ["Chính kịch", "Tình cảm"], emoji: "🏃",
    color: "rgba(100,160,100,0.08)",
    director: "Robert Zemeckis",
    cast: "Tom Hanks, Robin Wright, Gary Sinise",
    duration: "142 phút", country: "Mỹ",
    desc: "Cuộc đời kỳ lạ của một người đàn ông Alabama IQ thấp nhưng trái tim vĩ đại, vô tình chứng kiến và tham gia vào những sự kiện lịch sử quan trọng nhất nước Mỹ thế kỷ 20."
  },
  {
    id: 9, title: "Joker", year: 2019, rating: 8.4,
    genres: ["Tội phạm", "Hồi hộp"], emoji: "🃏",
    color: "rgba(200,80,80,0.08)",
    director: "Todd Phillips",
    cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
    duration: "122 phút", country: "Mỹ",
    desc: "Arthur Fleck — một diễn viên hài thất bại, bị xã hội bỏ rơi và ngược đãi — dần dần đánh mất lý trí và biến đổi thành biểu tượng hỗn loạn đáng sợ nhất Gotham."
  },
  {
    id: 10, title: "Frozen", year: 2013, rating: 7.4,
    genres: ["Hoạt hình", "Gia đình", "Nhạc kịch"], emoji: "❄️",
    color: "rgba(130,200,240,0.08)",
    director: "Chris Buck, Jennifer Lee",
    cast: "Idina Menzel, Kristen Bell, Josh Gad",
    duration: "102 phút", country: "Mỹ",
    desc: "Công chúa Anna dũng cảm lên đường cùng người leo núi Kristoff và chú tuần lộc Sven để tìm chị gái Elsa — người đã vô tình phủ bóng băng lên cả vương quốc Arendelle."
  },
  {
    id: 11, title: "Mad Max: Fury Road", year: 2015, rating: 8.1,
    genres: ["Hành động", "Khoa học viễn tưởng"], emoji: "💥",
    color: "rgba(224,120,50,0.08)",
    director: "George Miller",
    cast: "Tom Hardy, Charlize Theron, Nicholas Hoult",
    duration: "120 phút", country: "Úc / Mỹ",
    desc: "Trong sa mạc hậu tận thế, Max Rockatansky bị bắt làm 'túi máu' và cuốn vào cuộc trốn thoát điên rồ của Imperator Furiosa — người dám đối đầu với bạo chúa Immortan Joe."
  },
  {
    id: 12, title: "La La Land", year: 2016, rating: 8.0,
    genres: ["Tình cảm", "Nhạc kịch"], emoji: "🎵",
    color: "rgba(200,100,200,0.08)",
    director: "Damien Chazelle",
    cast: "Ryan Gosling, Emma Stone, John Legend",
    duration: "128 phút", country: "Mỹ",
    desc: "Một nhạc sĩ jazz đam mê và một nữ diễn viên trẻ đang chật vật với ước mơ của mình gặp nhau và yêu nhau tại Los Angeles — nhưng tham vọng đôi khi có giá của nó."
  },
  {
    id: 13, title: "John Wick", year: 2014, rating: 7.4,
    genres: ["Hành động", "Tội phạm"], emoji: "🔫",
    color: "rgba(80,80,80,0.15)",
    director: "Chad Stahelski",
    cast: "Keanu Reeves, Michael Nyqvist, Alfie Allen",
    duration: "101 phút", country: "Mỹ",
    desc: "Cựu sát thủ huyền thoại John Wick tưởng đã rời bỏ cuộc sống tối tăm, nhưng khi những kẻ xấu giết chú chó — món quà cuối cùng từ người vợ quá cố — anh trở lại đầy sát khí."
  },
  {
    id: 14, title: "Up", year: 2009, rating: 8.2,
    genres: ["Hoạt hình", "Gia đình", "Chính kịch"], emoji: "🎈",
    color: "rgba(232,197,71,0.08)",
    director: "Pete Docter",
    cast: "Edward Asner, Jordan Nagai, John Ratzenberger",
    duration: "96 phút", country: "Mỹ",
    desc: "Cụ ông Carl Fredricksen buộc hàng nghìn bóng bay vào ngôi nhà để thực hiện giấc mơ cùng người vợ quá cố — nhưng chuyến phiêu lưu lại bắt đầu với một cậu bé hiếu kỳ bám theo."
  },
  {
    id: 15, title: "Tenet", year: 2020, rating: 7.3,
    genres: ["Hành động", "Khoa học viễn tưởng", "Hồi hộp"], emoji: "⏳",
    color: "rgba(80,180,180,0.08)",
    director: "Christopher Nolan",
    cast: "John David Washington, Robert Pattinson, Elizabeth Debicki",
    duration: "150 phút", country: "Mỹ / Anh",
    desc: "Một điệp viên CIA bước vào thế giới bí ẩn của Tenet — tổ chức sử dụng công nghệ đảo ngược thời gian — để ngăn chặn Thế chiến thứ Ba từ… tương lai."
  },
  {
    id: 16, title: "Parasite", year: 2019, rating: 8.5,
    genres: ["Hồi hộp", "Chính kịch"], emoji: "🏠",
    color: "rgba(180,120,80,0.08)",
    director: "Bong Joon-ho",
    cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
    duration: "132 phút", country: "Hàn Quốc",
    desc: "Gia đình nghèo Ki-taek lần lượt len lỏi vào làm việc cho gia đình triệu phú Park — một kế hoạch tưởng hoàn hảo cho đến khi một bí mật ẩn giấu trong tầng hầm phá vỡ tất cả."
  },
];

// ===========================================
// 2. TRẠNG THÁI ỨNG DỤNG
// ===========================================
let selectedGenres = new Set();
let searchKeyword  = "";
let debounceTimer  = null;

// ===========================================
// 3. TỰ ĐỘNG PHÁT HIỆN THỂ LOẠI
// ===========================================
function extractGenres(movieList) {
  const genreSet = new Set();
  movieList.forEach(movie => movie.genres.forEach(g => genreSet.add(g)));
  return [...genreSet].sort((a, b) => a.localeCompare(b, "vi"));
}

function countByGenre(genre) {
  return movies.filter(m => m.genres.includes(genre)).length;
}

// ===========================================
// 4. RENDER CHECKBOX THỂ LOẠI
// ===========================================
function renderGenreCheckboxes() {
  const allGenres = extractGenres(movies);
  const container = document.getElementById("genre-list");
  container.innerHTML = "";

  allGenres.forEach(genre => {
    const item = document.createElement("div");
    item.className = "genre-item";
    item.dataset.genre = genre;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `genre-${genre}`;
    checkbox.value = genre;
    checkbox.addEventListener("change", handleGenreChange);

    const label = document.createElement("label");
    label.htmlFor = `genre-${genre}`;
    label.textContent = genre;

    const count = document.createElement("span");
    count.className = "genre-count";
    count.textContent = countByGenre(genre);

    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(count);
    container.appendChild(item);
  });
}

// ===========================================
// 5. XỬ LÝ CHECKBOX
// ===========================================
function handleGenreChange(event) {
  const genre = event.target.value;
  const item = event.target.closest(".genre-item");
  if (event.target.checked) { selectedGenres.add(genre); item.classList.add("active"); }
  else                       { selectedGenres.delete(genre); item.classList.remove("active"); }
  applyFilters();
}

// ===========================================
// 6. TÌM KIẾM VỚI DEBOUNCE (400ms)
// ===========================================
function handleSearchInput(event) {
  document.getElementById("clear-search").classList.toggle("visible", event.target.value.length > 0);
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    searchKeyword = event.target.value.trim().toLowerCase();
    applyFilters();
  }, 400);
}

// ===========================================
// 7. BỘ LỌC TÍCH HỢP
// ===========================================
function applyFilters() {
  const filtered = movies.filter(movie => {
    const matchesGenre  = selectedGenres.size === 0 || movie.genres.some(g => selectedGenres.has(g));
    const matchesSearch = searchKeyword === "" || movie.title.toLowerCase().includes(searchKeyword);
    return matchesGenre && matchesSearch;
  });
  renderMovies(filtered);
  updateActiveFilterDisplay();
}

// ===========================================
// 8. RENDER MOVIE CARDS
// ===========================================
const TAG_CLASS_MAP = {
  "Hành động": "tag-action", "Khoa học viễn tưởng": "tag-sci",
  "Chính kịch": "tag-drama", "Tình cảm": "tag-romance",
  "Tội phạm": "tag-crime",  "Hồi hộp": "tag-thriller",
  "Hoạt hình": "tag-anim",  "Gia đình": "tag-family",
  "Nhạc kịch": "tag-musical",
};
function getTagClass(genre) { return TAG_CLASS_MAP[genre] || "tag-default"; }

function renderMovies(list) {
  const grid        = document.getElementById("movie-grid");
  const emptyState  = document.getElementById("empty-state");
  const resultCount = document.getElementById("result-count");

  resultCount.textContent = `${list.length} / ${movies.length} phim`;

  if (list.length === 0) {
    grid.innerHTML = "";
    emptyState.style.display = "flex";
    return;
  }
  emptyState.style.display = "none";

  grid.innerHTML = list.map(movie => `
    <div class="movie-card" data-id="${movie.id}">
      <div class="card-poster" style="--poster-color: ${movie.color}">
        <span class="card-emoji">${movie.emoji}</span>
        <span class="card-year-overlay">${movie.year}</span>
        <span class="card-rating"><span class="star-icon">★</span> ${movie.rating}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${movie.title}</h3>
        <div class="card-tags">
          ${movie.genres.map(g => `<span class="card-tag ${getTagClass(g)}">${g}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  // Gắn sự kiện click mở modal cho từng card
  grid.querySelectorAll(".movie-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.id);
      const movie = movies.find(m => m.id === id);
      if (movie) openModal(movie);
    });
  });
}

// ===========================================
// 9. MODAL — MỞ / ĐÓNG
// ===========================================
function openModal(movie) {
  const overlay = document.getElementById("modal-overlay");

  // Điền dữ liệu vào modal
  document.getElementById("modal-emoji").textContent   = movie.emoji;
  document.getElementById("modal-title").textContent   = movie.title;
  document.getElementById("modal-desc").textContent    = movie.desc;
  document.getElementById("modal-rating-badge").textContent = `★ ${movie.rating}`;
  document.getElementById("modal-year-badge").textContent   = movie.year;
  document.getElementById("modal-poster").style.setProperty("--poster-color", movie.color);

  // Tags thể loại
  document.getElementById("modal-tags").innerHTML = movie.genres
    .map(g => `<span class="card-tag ${getTagClass(g)}">${g}</span>`)
    .join("");

  // Grid thông tin chi tiết
  document.getElementById("modal-meta-grid").innerHTML = `
    <div class="meta-item">
      <span class="meta-label">Đạo diễn</span>
      <span class="meta-value">${movie.director}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Thời lượng</span>
      <span class="meta-value">${movie.duration}</span>
    </div>
    <div class="meta-item" style="grid-column: 1 / -1">
      <span class="meta-label">Diễn viên chính</span>
      <span class="meta-value">${movie.cast}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Quốc gia</span>
      <span class="meta-value">${movie.country}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">Năm phát hành</span>
      <span class="meta-value">${movie.year}</span>
    </div>
  `;

  // Mở modal
  overlay.classList.add("open");
  document.body.style.overflow = "hidden"; // Khóa scroll trang
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";       // Khôi phục scroll
}

// ===========================================
// 10. DARK / LIGHT MODE
//     Lưu vào localStorage để giữ nguyên khi tải lại
// ===========================================
function initTheme() {
  // Đọc lựa chọn đã lưu; mặc định là dark
  const saved = localStorage.getItem("cinescope-theme") || "dark";
  if (saved === "light") {
    document.body.classList.add("light-mode");
  }
}

function toggleTheme() {
  const isLight = document.body.classList.toggle("light-mode");
  // Lưu lựa chọn vào localStorage
  localStorage.setItem("cinescope-theme", isLight ? "light" : "dark");
}

// ===========================================
// 11. HIỂN THỊ BỘ LỌC ĐANG HOẠT ĐỘNG
// ===========================================
function updateActiveFilterDisplay() {
  const section = document.getElementById("active-filter-section");
  const display = document.getElementById("active-filter-display");
  const hasGenre  = selectedGenres.size > 0;
  const hasSearch = searchKeyword.length > 0;

  if (!hasGenre && !hasSearch) { section.style.display = "none"; return; }

  section.style.display = "block";
  const parts = [];
  if (hasGenre)  parts.push(`<strong>Thể loại:</strong><br>${[...selectedGenres].join(", ")}`);
  if (hasSearch) parts.push(`<strong>Từ khóa:</strong> "${searchKeyword}"`);
  display.innerHTML = parts.join("<br><br>");
}

// ===========================================
// 12. XÓA BỘ LỌC
// ===========================================
function clearGenreFilters() {
  selectedGenres.clear();
  document.querySelectorAll(".genre-item input[type='checkbox']").forEach(cb => cb.checked = false);
  document.querySelectorAll(".genre-item").forEach(item => item.classList.remove("active"));
  applyFilters();
}

function clearSearch() {
  document.getElementById("search-input").value = "";
  document.getElementById("clear-search").classList.remove("visible");
  clearTimeout(debounceTimer);
  searchKeyword = "";
  applyFilters();
}

// ===========================================
// 13. KHỞI TẠO ỨNG DỤNG
// ===========================================
function init() {
  // Áp dụng theme đã lưu trước khi render
  initTheme();

  document.getElementById("total-badge").textContent = `${movies.length} phim`;
  renderGenreCheckboxes();

  // Tìm kiếm
  document.getElementById("search-input").addEventListener("input", handleSearchInput);
  document.getElementById("clear-genres").addEventListener("click", clearGenreFilters);
  document.getElementById("clear-search").addEventListener("click", clearSearch);

  // Theme toggle
  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

  // Modal: đóng khi nhấn nút ✕
  document.getElementById("modal-close").addEventListener("click", closeModal);

  // Modal: đóng khi nhấn ra ngoài (overlay)
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Modal: đóng khi nhấn phím Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  applyFilters();
}

document.addEventListener("DOMContentLoaded", init);

