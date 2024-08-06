# Read the list of images
with open('image_list.txt', 'r') as file:
    images = file.read().splitlines()

# Start the HTML content
html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Image Gallery</h1>
    <div class="gallery">
"""

# Add each image to the HTML content
for image in images:
    html_content += '        <img src="https://darkbreton.github.io/couple/photos/{}">\n'.format(image)

# End the HTML content
html_content += """
    </div>
</body>
</html>
"""

# Save the HTML content to a file
with open('image_gallery.html', 'w') as file:
    file.write(html_content)

print("HTML file generated successfully.")