const jsConfetti = new JSConfetti();

function launchConfetti() {
    jsConfetti.addConfetti({
        emojis: ['❤️', '💖', '🎉', '💘', '💞'],
        confettiRadius: 8,
        confettiNumber: 80,
        emojiSize: 30,
    });
}

// Open curtains and trigger confetti
setTimeout(launchConfetti, 2000);


function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("captionText");
    launchConfetti();
  // Set the source and caption for the modal image
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
  
  // Display the modal
  modal.style.display = "block";
  
  // Remove active class if present (for repeated clicks)
  modalImg.classList.remove("active");

  // Force reflow to restart the CSS animation
  void modalImg.offsetWidth;
  
  // Add the active class to trigger the zoom-in effect
  modalImg.classList.add("active");
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  // Remove the active class to trigger the zoom-out effect
  modalImg.classList.remove("active");

  // Wait for the transition to finish before hiding the modal
  setTimeout(() => {
    modal.style.display = "none";
  }, 400); // 400ms matches the CSS transition duration
}
