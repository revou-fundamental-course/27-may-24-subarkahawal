document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const resultArea = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman

        const nama = document.getElementById('nama').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const pesan = document.getElementById('pesan').value;

        if (!nama || !gender || !pesan) {
            alert('Mohon lengkapi semua field sebelum mengirimkan pesan.');
            return;
        }

        // Jika semua field terisi, tampilkan hasil dan tambahkan kelas has-border
        resultArea.innerHTML = `
            <div><span class="label">Nama:</span> <span class="value">${nama}</span></div>
            <div><span class="label">Jenis Kelamin:</span> <span class="value">${gender.value}</span></div>
            <div><span class="label">Pesan:</span> <span class="value">${pesan}</span></div>
        `;
        resultArea.classList.add('has-border');

        // Kosongkan form
        form.reset();
    });
});
