const books = [
  {
    title: "Twisted Love",
    genre: "heartfelt",
    length: ["long", "medium", "short"],
    level: ["regular", "occasional"],
    img: "https://m.media-amazon.com/images/I/71Ii6a7sajL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Only Love Can Hurt Like This",
    genre: "heartfelt",
    length: ["long", "medium", "short"],
    level: ["beginner"],
    img: "https://rukminim2.flixcart.com/image/480/640/xif0q/book/v/p/g/only-love-can-hurt-like-this-original-imah39dersfrymyq.jpeg?q=90"
  },
  {
    title: "The Silent Patient",
    genre: "thriller",
    length: ["long", "medium", "short"],
    level: ["regular", "beginner", "occasional"],
    img: "https://m.media-amazon.com/images/I/81y9uCHoxrL._UF1000,1000_QL80_.jpg"
  },
  {
    title: "Atomic Habits",
    genre: "motivation",
    length: ["long", "medium", "short"],
    level: ["regular", "beginner", "occasional"],
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Last Days",
    genre: "horror",
    length: ["long", "medium", "short"],
    level: ["regular", "beginner", "occasional"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOkjrAjj2glDGQQjIvPGrp4X0z-31AL5HqE2cQ_HKohWLgqMobz-BKGXSB8Ixcy6F0PhCAESTPKdfLF4GQFD9t779ojdBj7l66MvyCA&s=10"
  }
];

document.getElementById("recommendBtn").onclick = function () {
  const genre = document.getElementById("genre").value;
  const length = document.getElementById("length").value;
  const reader = document.getElementById("reader").value;
  const result = document.getElementById("result");

  result.innerHTML = "";

  if (!genre || !length || !reader) {
    result.innerHTML = "<p>Please answer all questions !!</p>";
    return;
  }

  const recommendedBooks = books
    .filter(book =>
      book.genre === genre &&
      book.length.includes(length) &&
      book.level.includes(reader)
    )
    .slice(0, 3);

  if (recommendedBooks.length === 0) {
    result.innerHTML = "<p>No perfect match found ! Try different options.</p>";
    return;
  }

  recommendedBooks.forEach(book => {
    result.innerHTML += `
      <div class="book-card">
        <img src="${book.img}" alt="${book.title}">
        <h3>${book.title}</h3>
      </div>
    `;
  });
};
