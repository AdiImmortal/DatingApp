using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.CommonServices
{
    public class AppUserServices
    {
        private readonly DataContext _context;

        public AppUserServices(DataContext context)
        {
            _context = context;
        }
        public  async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.Username == username.ToLower());

        }
    }
}
