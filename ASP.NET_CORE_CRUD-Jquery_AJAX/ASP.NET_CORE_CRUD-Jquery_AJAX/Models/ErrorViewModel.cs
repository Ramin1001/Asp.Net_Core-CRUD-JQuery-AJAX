using System;

namespace ASP.NET_CORE_CRUD_Jquery_AJAX.Models
{
    public class ErrorViewModel
    {
        public string RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}
