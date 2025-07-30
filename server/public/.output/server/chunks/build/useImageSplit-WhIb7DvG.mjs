import { ref } from 'vue';

function useImageSplit() {
  const images = ref([]);
  const splitImage = (image) => {
    return new Promise((resolve, reject) => {
      const canvas = (void 0).createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.setAttribute("crossOrigin", "");
      img.onload = () => {
        const { width, height } = img;
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        canvas.width = halfWidth;
        canvas.height = halfHeight;
        images.value = [];
        for (let x = 0; x < 2; x++) {
          for (let y = 0; y < 2; y++) {
            ctx == null ? void 0 : ctx.clearRect(0, 0, halfWidth, halfHeight);
            ctx == null ? void 0 : ctx.drawImage(img, -x * halfWidth, -y * halfHeight);
            images.value.push(canvas == null ? void 0 : canvas.toDataURL());
          }
        }
        resolve(images.value);
      };
      img.onerror = (err) => {
        reject(err);
      };
      img.src = image;
    });
  };
  return { images, splitImage };
}

export { useImageSplit };
//# sourceMappingURL=useImageSplit-WhIb7DvG.mjs.map
