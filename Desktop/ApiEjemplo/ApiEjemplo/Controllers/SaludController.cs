using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace ApiEjemplo.Controllers;

[ApiController]
[Route("[controller]")]
public class SaludController(NpgsqlDataSource db) : ControllerBase
{
    [HttpGet(Name = "GetSalud")]
    public async Task<IActionResult> Get()
    {
        await using var cmd = db.CreateCommand("Select 1");
        await cmd.ExecuteScalarAsync();
        return Ok(new { baseDatos = "OK" });
    }
}