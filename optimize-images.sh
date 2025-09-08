#!/bin/bash

# Image optimization script for FLL Mission Flashcards
# Requires: sips (built-in on macOS)

echo "FLL Mission Flashcards - Image Optimization"
echo "=========================================="

# Create optimized directory
mkdir -p images/optimized

# Function to optimize image
optimize_image() {
    local input="$1"
    local output="$2"
    local max_width="$3"
    
    # Use sips to resize and convert
    sips -Z "$max_width" "$input" --out "$output" --setProperty format jpeg --setProperty formatOptions 85
    
    # Get file sizes for comparison
    local original_size=$(ls -lh "$input" | awk '{print $5}')
    local new_size=$(ls -lh "$output" | awk '{print $5}')
    
    echo "  ✓ $(basename "$input"): $original_size → $new_size"
}

echo ""
echo "Optimizing mission card images..."
for file in images/mission-*.png; do
    if [[ ! "$file" == *".model.png" ]]; then
        base=$(basename "$file" .png)
        optimize_image "$file" "images/optimized/${base}.jpg" 800
    fi
done

echo ""
echo "Optimizing model images..."
for file in images/mission-*.model.png; do
    base=$(basename "$file" .png)
    base_no_model=${base%.model}
    optimize_image "$file" "images/optimized/${base_no_model}.model.jpg" 600
done

echo ""
echo "Summary:"
echo "--------"
original_size=$(du -sh images/*.png 2>/dev/null | tail -1 | awk '{print $1}')
optimized_size=$(du -sh images/optimized/*.jpg 2>/dev/null | tail -1 | awk '{print $1}')
echo "Original total: ~$(ls -lh images/*.png | grep -v total | wc -l) files"
echo "Optimized total: ~$(ls -lh images/optimized/*.jpg | grep -v total | wc -l) files"

echo ""
echo "✅ Optimization complete!"
echo "The optimized images are in images/optimized/"