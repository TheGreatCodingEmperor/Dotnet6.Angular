using Dapper;
using Microsoft.AspNetCore.Mvc;
using MiniProfiler.Integrations;
using MySqlConnector;
using portal;

namespace portal.Controllers;

[ApiController]
[Route ("[controller]")]
public class BasicController : ControllerBase {

    private readonly ILogger<BasicController> _logger;

    public BasicController (ILogger<BasicController> logger) {
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> Get () {
        dynamic configs = @"";
        return Ok(

            new object()
        );
    }
}