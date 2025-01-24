function updateVideo() {
  const videoCode = document.getElementById('video-code').value;
  const loadingPlaceholder = document.getElementById('loading-placeholder');
  const iframe = document.getElementById('video-iframe');

  if (videoCode === "") {
    iframe.src = "";
    loadingPlaceholder.style.display = "none";
    iframe.classList.remove("loaded");
    return;
  }

  loadingPlaceholder.style.display = 'block';
  iframe.classList.remove("loaded");
  iframe.src = `https://www.youtube.com/embed/${videoCode}`;

  iframe.onload = function() {
    loadingPlaceholder.style.display = 'none';
    iframe.classList.add('loaded');
  };

  iframe.onerror = function() {
    loadingPlaceholder.textContent = "Error loading video.";
  };
}
