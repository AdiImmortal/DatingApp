using API.DBHelpers;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(DataContext dbContext) : ControllerBase
    {



        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            var user = await dbContext.Users.ToListAsync();
            return Ok(user);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<AppUser>> GetUsers(int id)
        {
            var user = await dbContext.Users.FindAsync(id);
            return Ok(user);
        }

    }
}
