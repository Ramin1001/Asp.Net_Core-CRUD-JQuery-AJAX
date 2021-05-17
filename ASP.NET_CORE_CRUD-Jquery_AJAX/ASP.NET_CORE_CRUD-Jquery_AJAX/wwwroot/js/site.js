// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


showInPopup = (url, title) => {
    $.ajax({
        type: 'GET',
        url: url,
        success: function (res) {
            $("#form-modal .modal-body").html(res);   
            $("#form-modal .modal-title").html(title);
            $("#form-modal").modal('show'); // call modal function with 'show' parametr
        }
    });
}

jQueryAjaxPost = form => {

    try {

        $.ajax({
            type: 'POST',
            url: form.action,
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (res) {
                // checking validation
                if (res.isValid) { // if ok
                    $("#view-all").html(res.html); // update partial model _ViewAll 
                    $("#form-modal .modal-body").html(''); // before hide clear model body
                    $("#form-modal .modal-title").html(''); // before hide clear model title
                    $("#form-modal").modal('hide'); // at last hide popup model

                } else { // if not Valid then update model body
                    $("#form-modal .modal-body").html(res.html);
                }
            },
            error: function (err) {
                console.log(err);
            }

        });

    } catch (e) {
        console.log(e);
    }



    // to prevent default form submit event
    return false;
}