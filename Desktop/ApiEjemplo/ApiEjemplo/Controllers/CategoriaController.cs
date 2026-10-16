using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace ApiEjemplo.Controllers;

[ApiController]
[Route("[controller]")] //Ruta basada en el nombre del controlador
public class CategoriaController(NpgsqlDataSource db) : ControllerBase
{
    [HttpGet(Name = "GetCategoria")]
    public async Task<ActionResult<List<Categoria>>> Get()
    {
        const string consulta = "SELECT * FROM categoria";
        await using var cmd = db.CreateCommand(consulta);
        await using var lector = await cmd.ExecuteReaderAsync(); //Trae todos los registros que devuelva la consulta
        var lista = new List<Categoria>();
        //Loop, bucle, pasar los parametros al objeto de tipo Categoria
        while (await lector.ReadAsync())
        {
            var categoria = new Categoria
            {
                Id = lector.GetInt32(0),
                Nombre = lector.GetString(1)
            };
            lista.Add(categoria);
        }
        return Ok(lista);
    } 
    [HttpGet("{id:int}")] 
    public async Task<ActionResult<Categoria>> ObtenerPorId(int id)
    {
        const string consulta = "SELECT * FROM categoria where id_categoria = @ID";
        await using var cmd = db.CreateCommand(consulta);
        cmd.Parameters.AddWithValue("ID", id);
        await using var lector = await cmd.ExecuteReaderAsync();
        if (!await lector.ReadAsync())
        {
            return NotFound(new {error = "La categoria no existe"});
        }
        return Ok(new Categoria 
        {
            Id = lector.GetInt32(0),
            Nombre = lector.GetString(1)
        });
    }    

}