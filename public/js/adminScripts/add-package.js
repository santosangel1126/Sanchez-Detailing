async function newPackageHandler(event) {
    event.preventDefault();

    const packageName = document.querySelector('input[name="package-name"]').value;
    const packageTags = document.querySelector('input[name="package-tags"]').value;
    const packagePrice = document.querySelector('input[name="package-price"]').value;

    const response = await fetch('/api/packages', {
        method: 'POST',
        body: JSON.stringify({
            packageName,
            packageTags,
            packagePrice
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        alert(response.statusText);
    }
}

document.querySelector('.update-contact-form').addEventListener('submit', newPackageHandler);