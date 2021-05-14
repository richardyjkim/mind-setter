async function loveClickHandler(event) {
  event.preventDefault();

  let id = event.target.getAttribute("post_id");

  const response = await fetch('/api/posts/uplove', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelectorAll('.love-btn').forEach(item => {
  item.addEventListener('click', loveClickHandler)
});