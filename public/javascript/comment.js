async function commentsFormHandler(event) {
  event.preventDefault();

  // const title = document.querySelector('input[name="post-title"]').value;
  // const post_url = document.querySelector('input[name="post-url"]').value;  

  const response = await fetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({
      post_id,
      comment_text,
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

    // document.querySelector('.new-post-form').addEventListener('submit', commentsFormHandler);

