// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// loader
$(function () {
    $("#loaderbody").addClass('hide'); // first is always hide loader

    $(document).bind('ajaxStart', function () {
        $("#loaderbody").removeClass('hide'); // when we start ajax request we show that loader
    }).bind('ajaxStop', function () { // after completed this request we hide this loader again
        $("#loaderbody").addClass('hide');
    })
})





// empty popup form for create
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


// popup form for edit
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
                    $.notify('Submitted successfully', { globalPosition: 'top center', className:'success' });

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

// for delete action
JqueryAjaxDelete = form => {
    if (confirm('Are you sure to delete this record?')) {
        try {
            $.ajax({
                type: 'POST',
                url: form.action,
                data: new FormData(form),
                contentType: false,
                processData: false,
                success: function (res) {
                    // checking validation
                  
                    $("#view-all").html(res.html); // update partial model _ViewAll
                    $.notify('Delete successfully', { globalPosition: 'top center', className:'success' });
                    
                },
                error: function (err) {
                    console.log(err);
                }
            });
        } catch (e) {
            console.log(e)
        }
    }

    // to prevent default form submit event
    return false;
}