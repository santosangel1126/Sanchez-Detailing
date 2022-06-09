async function updateContactInfo(event) {
    event.preventDefault();

    const contactPhone = document.querySelector('input[name="contact-phone"]').value;
    const contactEmail = document.querySelector('input[name="contact-email"]').value;
    const contactAddress = document.querySelector('input[name="contact-address"]').value;

    const response = await fetch('/api/contact', {
        method: 'PUT',
        body: JSON.stringify({
            contactPhone,
            contactEmail,
            contactAddress
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        alert(response.statusText);
    }
}

document.querySelector('.new-package-form').addEventListener('submit', updateContactInfo);