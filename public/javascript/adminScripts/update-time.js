async function updateHours(event) {
    event.preventDefault();

    const updatedStartHour = document.querySelector('input[name="new-start"]').value;
    const updatedEndHour = document.querySelector('input[name="new-end"]').value;

    const response = await fetch('/api/hours', {
        method: 'PUT',
        body: JSON.stringify({
            updatedStartHour,
            updatedEndHour,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        alert(response.statusText);
    }
}

document.querySelector('.update-hours-form').addEventListener('submit', updateHours);