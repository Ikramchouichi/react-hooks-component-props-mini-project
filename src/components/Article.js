// src/components/Article.js
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const timeUnits = minutes < 30 ? 5 : 10;
  const emojiCount = Math.ceil(minutes / timeUnits);
  const emojis = emoji.repeat(emojiCount);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {emojis} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;


