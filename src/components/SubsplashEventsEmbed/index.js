function injectSubsplashEventsEmbed() {
    document.getElementById("subsplash-embed-events").innerHTML = `
    <div class="subsplash-embed-events-container section-content">
    <div class="subsplash-embed-events-container section-content">
                <script id="subsplash-embed-qtbc9rz"
                    type="text/javascript"> var target = document.getElementById("subsplash-embed-qtbc9rz"); var script = document.createElement("script"); script.type = "text/javascript"; script.onload = function () { subsplashEmbed("+dwm2/lb/ca/+qtbc9rz?embed", "https://subsplash.com/", "subsplash-embed-qtbc9rz"); }; script.src = "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js"; target.parentElement.insertBefore(script, target); </script>
            </div>
        </div>
    `;
}

export { injectSubsplashEventsEmbed };