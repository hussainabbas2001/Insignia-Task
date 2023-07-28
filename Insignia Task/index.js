 function showContent(contentId) {
            const allContent = document.querySelectorAll("#main >#right > div");

            allContent.forEach(content => {
                content.style.display = "none";
            });

            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                selectedContent.style.display = "block";
            }
        }
        document.getElementById('foundation').style.display = 'block';