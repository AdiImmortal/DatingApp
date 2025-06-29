using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.DBHelpers
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
        public DbSet<AppUser> Users { get; set; }

    }
}



