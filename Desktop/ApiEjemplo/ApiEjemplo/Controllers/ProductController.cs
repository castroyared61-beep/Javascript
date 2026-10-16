using Microsoft.AspNetCore.Mvc;

namespace ApiEjemplo.Controllers;

[ApiController]
[Route("[controller]")]

public class ProductController : ControllerBase
{
    private static readonly string[] Names = ["Computadores", "Perifericos", "Audio", "Accesorios", "Oficina"];
    [HttpGet(Name = "GetProduct")]
    public IEnumerable<Product> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new Product
        {
            Id = index,
            Name = Names[Random.Shared.Next(Names.Length)],
            Quantity = Random.Shared.Next(1, 30),
            Price = Random.Shared.Next(1000, 30000)
        })
        .ToArray();
    }
}

