const authors = document.querySelectorAll('#reviews .authors h1');
const comments = document.querySelectorAll('#reviews .comments .comment p');
let counter = 0;

interval = setInterval(() => {
  if (counter % 2 === 0) {
    authors.forEach((author) => {
      author.classList.remove('move-to-zero');
      author.classList.add('move-to-minus-one-hundred');
    });
    comments.forEach((comments) => {
      comments.classList.remove('move-to-zero');
      comments.classList.add('move-to-minus-one-hundred');
    });
    comments[0].style.opacity = '0';
    comments[1].style.opacity = '1';
  } else {
    authors.forEach((author) => {
      author.classList.add('move-to-zero');
      author.classList.remove('move-to-minus-one-hundred');
    });
    comments.forEach((comment) => {
      comment.classList.add('move-to-zero');
      comment.classList.remove('move-to-minus-one-hundred');
    });
    comments[0].style.opacity = '1';
    comments[1].style.opacity = '0';
  }
  counter++;
}, 3000);
