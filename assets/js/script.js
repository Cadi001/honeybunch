const jsConfetti = new JSConfetti();

function launchConfetti() {
    jsConfetti.addConfetti({
        emojis: ['❤️', '💖', '🎉', '💘', '💞', '🐝', '🍯'],
        confettiRadius: 8,
        confettiNumber: 80,
        emojiSize: 30,
    });
}

// Open curtains and trigger confetti
setTimeout(launchConfetti, 2000);


function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("captionText");
    launchConfetti();
    modal.style.display = "flex"; // Show modal
    modalImg.src = imgElement.src; // Set image source
    captionText.innerHTML = imgElement.alt; // Set caption

    // Close modal when clicking outside the image
    modal.onclick = function (event) {
        if (event.target !== modalImg) {
            closeModal();
        }
    };
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
