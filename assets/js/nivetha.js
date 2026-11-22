/* Nivetha Packers and Movers - quote / enquiry forms
   The original template posted forms to a PHP mail script that is not part of this
   static site. These forms now open WhatsApp with the filled details (works on any
   static hosting such as GitHub Pages). */
(function ($) {
  "use strict";
  var WA_NUMBER = "919344266547";

  $(function () {
    $(".nv-quote-form").on("submit", function (e) {
      e.preventDefault();
      var form = this;
      var $res = $(form).find(".result");
      var v = function (n) { return $.trim($(form).find('[name="' + n + '"]').val() || ""); };
      var name = v("name"), phone = v("phone"), from = v("fromadd"), to = v("toadd");

      if (!name || !phone || !from || !to) {
        $res.html('<p class="nv-form-msg nv-form-msg--err">Please fill in all the fields.</p>');
        return false;
      }
      if (phone.replace(/\D/g, "").length < 10) {
        $res.html('<p class="nv-form-msg nv-form-msg--err">Please enter a valid phone number.</p>');
        return false;
      }

      var text = "Hello Nivetha Packers and Movers,\nI would like a free quote for shifting.\n\n" +
                 "Name: " + name + "\nPhone: " + phone + "\nFrom: " + from + "\nTo: " + to;
      window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text), "_blank");

      $res.html('<p class="nv-form-msg nv-form-msg--ok">Thank you! Your enquiry is opening in WhatsApp &ndash; just tap Send. You can also call us on +91 93442 66547.</p>');
      form.reset();
      return false;
    });
  });
})(jQuery);
