(function() {
  function init(container) {
    var url = container.getAttribute("data-form-url");
    var id = container.getAttribute("id");

    var iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.src = url;
    iframe.id = "iframe-" + id;
    iframe.width = "100%";
    iframe.allowFullscreen = true;

    container.appendChild(iframe);
  }

  window.addEventListener('load', function() {
    var containers = document.getElementsByClassName("opcrm-webform");
    for (var i = 0; i < containers.length; i++) {
      init(containers[i]);
    }

    window.addEventListener('message',
      function(e) {
        if (event.origin != "https://forms.onepagecrm.eu" && event.origin != "https://forms.onepagecrm.com") {
          return;
        }

        var message = e.data;
        if (!message) {
          return;
        }

        var height = message.height;
        var id = message.id;

        var iframe = document.querySelector("#iframe-opcrm-webform-"+id);
        if (!iframe) {
          return;
        }

        iframe.height = height;
      },
      false
    );
  });
})();


