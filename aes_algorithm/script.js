const aes = {
    encrypt: function () {
        let encrypted = CryptoJS.AES.encrypt(
            document.getElementById("text").value,
            document.getElementById("password").value
        );
        document.getElementById("EncryptedValue").innerHTML = encrypted;
        document.getElementById("decrypted").innerHTML = "";
        console.log("Encrypt Successfully");
    },

    decrypt: function () {
        let decrypted = CryptoJS.AES.decrypt(
            document.getElementById("EncryptedValue").innerHTML,
            document.getElementById("password").value
        ).toString(CryptoJS.enc.Utf8);
        document.getElementById("decrypted").innerHTML = decrypted;
        document.getElementById("EncryptedValue").innerHTML = "";
        console.log("Decrypt Successfully");
    }
}

let d = new Date();
d.getFullYear();
let year = document.getElementById("year").innerHTML = "2022 - " + d.getFullYear();