// renderer.js

document.addEventListener('DOMContentLoaded', () => {
    setInterval(()=>{
        window.location.reload()
    },1000)
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent default navigation behavior

            const href = event.target.getAttribute('href');
            if (href.startsWith('http')) {
                // If the link is an external URL, open it in the default browser
                // shell.openExternal(href);
            } else {
                // Otherwise, load the local HTML file in the main window
                window.location.href = href;
            }
        });
    });
});
