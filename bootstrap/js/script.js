 //even pada saat up diclick
 $("#top-up").on("click", function(e){
    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    $("#home").animate({
      scrollTop : elemenTujuan.offset().top
    },800,'swing');
  });

  //Memperlihatkan dan Menyembunyikan detail Alamat di Page Tanya Kami
  $("#detail_alamat").hide();
  $("#alamat").mouseenter(function(){
        $("#detail_alamat").slideDown("slow");
  });
  $("#alamat").mouseleave(function(){
      $("#detail_alamat").slideUp("slow");
  });
    
//Validasi Form Pesan
$(document).ready(function() {
  $('.form').submit(function() {
    var nama = $('#nama').val();
    var email= $('#email').val();
    var telp = $('#telp').val();
    var massage = $('#massage').val();			

    if(nama != "" && email != "" && telp != "" && massage != ""){
      var terima = "Terimakasih " + nama + " - Pesan Anda Sudah Terkirim";
      alert(terima);
    }
  });
});