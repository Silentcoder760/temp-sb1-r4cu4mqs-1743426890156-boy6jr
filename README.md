# Rental Business Application

## How to Add Your Own Images to Products

1. **Prepare your images**:
   - Resize your images to an appropriate size (recommended: 800px × 600px)
   - Use jpg, png, or webp format
   - Name your image files clearly based on the product they represent

2. **Add images to the project**:
   - Place your image files in the `public/images` folder
   - Make sure the filenames match what's referenced in the code (e.g., `palm-island.jpg`, `wedding-castle.jpg`, etc.)

3. **Image naming convention**:
   The image filenames should match the product IDs in the Products.tsx file. Current products use these image names:
   - palm-island.jpg
   - wedding-castle.jpg
   - tropical-paradise.jpg
   - castle-kingdom.jpg
   - sports-arena.jpg
   - round-table.jpg
   - rectangular-table.jpg

4. **Adding new products with images**:
   If you add new products to the `products` array in Products.tsx, make sure to:
   - Add your image to the public/images folder
   - Set the image path in the product data to `/images/your-image-name.jpg` 