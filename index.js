document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mousemove', (event) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);

        // 中心付近では動きを最小化する
        if (distance < 20) {
            item.querySelector('img').style.transform = `translate(0, 0)`;
            return;
        }

        const maxDistance = 150;
        const moveFactor = Math.min(maxDistance / distance, 1) * 20;

        const offsetX = (x / distance) * moveFactor;
        const offsetY = (y / distance) * moveFactor;

        item.querySelector('img').style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = 'translate(0, 0)';
    });
});

document.querySelector('.self-intro-image').addEventListener('click', () => {
    const introText = document.querySelector('.self-intro-text');
    if (introText.style.display === 'none' || introText.style.display === '') {
        introText.style.display = 'block';
    } else {
        introText.style.display = 'none';
    }
});
