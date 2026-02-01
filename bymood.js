const books = [
  { title: "Twisted Love", author: "Ana Huang", mood: "heartfelt", img: "https://m.media-amazon.com/images/I/71Ii6a7sajL._AC_UF1000,1000_QL80_.jpg", rating: 4.5 },
  { title: "The Blue Umbrella", author: "Ruskin Bond", mood: "happy", img: "https://m.media-amazon.com/images/I/81w5rGx8RqL._AC_UF1000,1000_QL80_.jpg", rating: 4.0 },
  { title: "Mahashweta", author: "Sudha Murty", mood: "thoughtful", img: "https://m.media-amazon.com/images/I/71WdT9HK-EL._AC_UF1000,1000_QL80_.jpg", rating: 4.5},
  { title: "Powerless", author: "Lauren Robert", mood: "relaxed", img: "https://m.media-amazon.com/images/I/81k5yQ9qkcL._AC_UF1000,1000_QL80_.jpg", rating: 4.7 },
  { title: "The Silent Patient", author: "Alex Michaelides", mood: "thrilling", img: "https://m.media-amazon.com/images/I/81y9uCHoxrL._UF1000,1000_QL80_.jpg", rating: 4.7 },
  { title: "The Subtle Art of Not Giving a Fuck", author: "Mark Manson", mood: "motivated", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOaDKQpkKWSu-NT3Hk_1Um5Tcbkxb1yRNpw&s", rating: 4.3 },
  { title: "Only Love Can Hurt Like This", author: "Paige Toon", mood: "sad", img: "https://rukminim2.flixcart.com/image/480/640/xif0q/book/v/p/g/only-love-can-hurt-like-this-original-imah39dersfrymyq.jpeg?q=90", rating: 4.1 },
{title: "Last Days", author: "Adam Nevill", mood: "horror", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOkjrAjj2glDGQQjIvPGrp4X0z-31AL5HqE2cQ_HKohWLgqMobz-BKGXSB8Ixcy6F0PhCAESTPKdfLF4GQFD9t779ojdBj7l66MvyCA&s=10", rating: 4.1 },
{title: "Ghosts of the Silent Hills", author: "ANITA KRISHAN", mood: "horror", img: "https://m.media-amazon.com/images/I/91BqmmZMVdL._UF1000,1000_QL80_.jpg", rating: 4.1 },
{ title: "Shatter Me", author: "Tahereh Mafi", mood: "heartfelt", img: "https://m.media-amazon.com/images/I/817dntOcfsL._AC_UF1000,1000_QL80_.jpg", rating: 5},
{ title: "The Housemaid", author: "Freida Macfadden", mood: "thrilling", img: "https://m.media-amazon.com/images/I/61auOO5I6-L._AC_UF1000,1000_QL80_.jpg", rating: 4 },
{ title: "Fourth Wing", author: "Rebecca Yarros", mood: "heartfelt", img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Fourth_Wing_Cover_Art.jpeg/250px-Fourth_Wing_Cover_Art.jpeg", rating: 4.5 },
];

document.getElementById("submit").onclick = function () {
  const name = document.getElementById("name").value;
  alert("Hello " + name + " 👋 Welcome to Book Haven!");
};

const moodCards = document.querySelectorAll(".mood-card");
const bookList = document.getElementById("book-list");

moodCards.forEach(card => {
  card.onclick = function () {
    const mood = card.dataset.mood;

    const recommended = books
      .filter(book => book.mood === mood)
      .slice(0, 3);

    bookList.innerHTML = "";

    if (recommended.length === 0) {
      bookList.innerHTML = "<p>No books found </p>";
      return;
    }

    recommended.forEach(book => {
      bookList.innerHTML += `
        <div class="book-card">
          <img src="${book.img}">
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>⭐ ${book.rating}</p>
        </div>
      `;
    });
  };
});
