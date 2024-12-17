// ウィンドウが読み込まれた後に画像の高さを調整する
window.addEventListener('load', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let maxHeight = 0;

    // 最大の画像の高さを取得
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const imgHeight = img.naturalHeight;
        if (imgHeight > maxHeight) {
            maxHeight = imgHeight;
        }
    });

    // すべての画像の高さを最大に設定
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        img.style.height = `${maxHeight}px`;
    });
});
