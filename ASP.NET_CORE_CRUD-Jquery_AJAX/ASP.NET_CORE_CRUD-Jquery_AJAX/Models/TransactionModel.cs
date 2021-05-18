using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NET_CORE_CRUD_Jquery_AJAX.Models
{
    public class TransactionModel
    {
        [Key]
        public int TransactionId { get; set; }

        [Required(ErrorMessage ="This field is required.")]
        [Column(TypeName ="nvarchar(12)")]
        [Display(Name = "Account Number")]
        [StringLength(12)]
        public string AccountNumber { get; set; }

        [Required(ErrorMessage = "This field is required.")]
        [Column(TypeName = "nvarchar(100)")]
        [Display(Name = "Beneficiary Name")]
        public string  BeneficiaryName { get; set; }

        [Required(ErrorMessage = "This field is required.")]
        [Column(TypeName = "nvarchar(100)")]
        [Display(Name = "Bank Name")]
        public string BankName { get; set; }

        [Required(ErrorMessage = "This field is required.")]
        [Column(TypeName = "nvarchar(11)")]
        [Display(Name = "SWIFT Code")]
        [StringLength(11)]
        public string SWIFTCode { get; set; }

        [Required(ErrorMessage = "This field is required.")]
        [Display(Name = "Amount")]
        public int Amount { get; set; }

        [DisplayFormat(DataFormatString ="{0:dd/MM/yyyy}")]
        public DateTime Date { get; set; }
    }
}
