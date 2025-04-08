import "./MapsEmbedButton.scss";

function injectGoogleMapsEmbed() {
    document.getElementById("expressions-church-google-maps-embed").innerHTML = `
        <iframe className={styles.googleMapsEmbed} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.3883823355854!2d-118.09827418680484!3d34.15776293154459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ddc93e37319d%3A0xc16141ac9c2f1e6c!2sExpressions%20Church!5e0!3m2!1sen!2sus!4v1740717655727!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    `;
}

export { injectGoogleMapsEmbed };
