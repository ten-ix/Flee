const WA = '919301868258';

// Booking Form
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;
    const passengers = document.getElementById('passengers').value;

    const message = `🚖 New Booking Request

Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Destination: ${destination}
Passengers: ${passengers}`;

    const whatsappURL =
        `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
});


// Driver Registration Form
document.getElementById('driverForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const dname = document.getElementById('dname').value;
    const dphone = document.getElementById('dphone').value;
    const vehicle = document.getElementById('vehicle').value;
    const seats = document.getElementById('seats').value;
    const exp = document.getElementById('exp').value;

    const message = `🚗 New Driver Registration

Name: ${dname}
Phone: ${dphone}
Vehicle: ${vehicle}
Seats: ${seats}
Experience: ${exp} years`;

    const whatsappURL =
        `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
});
