document.addEventListener("DOMContentLoaded", function() {
  
    var namaInput = document.getElementById("nama");
    var nikInput = document.getElementById("nik");
    var seatSelect = document.getElementById("Seat");
    var alamatTextarea = document.getElementById("alamat");
    var tanggalInput = document.getElementById("tanggal");
    var submitButton = document.querySelector(".cool-button");
  
   
    function handleSubmit(event) {
      event.preventDefault(); 
      var nama = namaInput.value;
      var nik = nikInput.value;
      var tribun = seatSelect.value;
      var alamat = alamatTextarea.value;
      var tanggal = tanggalInput.value;
  
     
      var message = "Nama: " + nama + "\n" +
                    "NIK: " + nik + "\n" +
                    "Seat: " + tribun + "\n" +
                    "Alamat: " + alamat + "\n" +
                    "Tanggal: " + tanggal;
      alert(message);
  
     
      namaInput.value = "";
      nikInput.value = "";
      seatSelect.value = "Barat";
      alamatTextarea.value = "";
      tanggalInput.value = "";
    }
  

    submitButton.addEventListener("click", handleSubmit);
  });
  