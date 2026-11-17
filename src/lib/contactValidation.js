const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Memeriksa isian formulir kontak. kosong = semua valid.
export function validateContact(values) {
    const errors = {};

    if (!values.name.trim()) errors.name = "Nama wajib diisi.";

    if (!values.email.trim()) errors.email = "Email wajib diisi.";
    else if (!emailPattern.test(values.email.trim())) {
        errors.email = "Format email belum benar, contohnya nama@contoh.com.";
    }

    if (values.message.trim().length < 10) errors.message = "Pesan minimal 10 karakter.";

    return errors;
}
