window.onload = function () {
    if (localStorage.getItem("hasCodeRunBefore") === null) {

      $(function() {
          toastr.options = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-bottom-right",
            "hideDuration": "1000",
            "timeOut": "0",
            "extendedTimeOut": "0",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }
          toastr.options.onclick = function () {

              location.href = '/privacy#scroll-cookies';

          };
          toastr.info("<p'>Cookies help us deliver our services. By using our services, you agree to our use of cookies. <a href='/privacy#scroll-cookies' target='_new'>More details</a></p>");
        });

        localStorage.setItem("hasCodeRunBefore", true);
    }
}
