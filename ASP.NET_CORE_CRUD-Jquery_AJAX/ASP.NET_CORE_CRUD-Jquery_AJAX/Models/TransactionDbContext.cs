using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NET_CORE_CRUD_Jquery_AJAX.Models
{
    public class TransactionDbContext : DbContext
    {
        public TransactionDbContext(DbContextOptions<TransactionDbContext> option):base(option)
        {
                
        }

        public DbSet<TransactionModel> Transactions { get; set; }



    }
}
