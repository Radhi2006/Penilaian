// Fungsi untuk menampilkan pop-up
function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");

    popupMessage.innerText = message;
    popup.classList.remove("hidden");

    // Sembunyikan pop-up setelah 3 detik
    setTimeout(() => {
        popup.classList.add("hidden");
    }, 1500);
}

// Fungsi untuk menghitung nilai
function hitungNilai() {
    const nama = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;
    const tugas = parseFloat(document.getElementById("tugas").value);
    const uts = parseFloat(document.getElementById("uts").value);
    const uas = parseFloat(document.getElementById("uas").value);

    // Validasi input
    if (tugas > 100 || uts > 100 || uas > 100) {
        showPopup("Nilai tidak boleh lebih dari 100!");
        return;
    }
    if (tugas < 0 || uts < 0 || uas < 0) {
        showPopup("Nilai tidak boleh kurang dari 0!");
        return;
    }

    // Menghitung total nilai
    const total = (tugas * 0.4) + (uts * 0.3) + (uas * 0.3);
    const hasilTotal = total.toFixed(2);

    // Menentukan predikat
    let predikat;
    if (total >= 80) {
        predikat = 'A';
    } else if (total >= 70) {
        predikat = 'B';
    } else if (total >= 60) {
        predikat = 'C';
    } else if (total >= 50) {
        predikat = 'D';
    } else {
        predikat = 'E';
    }

    // Menampilkan hasil
    document.getElementById("hasilNama").innerText = nama;
    document.getElementById("hasilNim").innerText = nim;
    document.getElementById("hasilTugas").innerText = tugas;
    document.getElementById("hasilUts").innerText = uts;
    document.getElementById("hasilUas").innerText = uas;
    document.getElementById("hasilTotal").innerText = hasilTotal;
    document.getElementById("hasilPredikat").innerText = predikat;

    document.getElementById("hasil").classList.remove("hidden");
}

// Menambahkan event listener pada tombol hitung
document.getElementById("hitungButton").addEventListener("click", hitungNilai);

// Menambahkan event listener untuk tombol Enter
document.getElementById("nilaiForm").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Mencegah submit form default
        hitungNilai(); // Memanggil fungsi hitungNilai
    }
});
