using Dapper;
using Microsoft.AspNetCore.Mvc;
using MiniProfiler.Integrations;
using MySqlConnector;
using portal;

namespace portal.Controllers;

[ApiController]
[Route ("[controller]")]
public class WeatherForecastController : ControllerBase {
    private static readonly string[] Summaries = new [] {
        "Freezing",
        "Bracing",
        "Chilly",
        "Cool",
        "Mild",
        "Warm",
        "Balmy",
        "Hot",
        "Sweltering",
        "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController (ILogger<WeatherForecastController> logger) {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get () {
        return Enumerable.Range (1, 5).Select (index => new WeatherForecast {
                Date = DateTime.Now.AddDays (index),
                    TemperatureC = Random.Shared.Next (-20, 55),
                    Summary = Summaries[Random.Shared.Next (Summaries.Length)]
            })
            .ToArray ();
    }

    [HttpGet ("sql")]
    public IActionResult Sql () {
        // var connection = new MySqlConnection ("server=127.0.0.1;port=3307;user id=root;password=70400845;database=gas_detection;charset=utf8;");
        // var result = connection.Query ($"select * from apiclaims").Take (2);
        // var result2 = connection.QueryFirstOrDefault ($"select * from apiclaims");
        // var factory = new SqlServerDbConnectionFactory (connectionString);
        string connectionString = "server=127.0.0.1;port=3307;user id=root;password=70400845;database=gas_detection;charset=utf8;";
        using (MySqlConnection connection = new MySqlConnection (connectionString)) {
            //DB Code
            // var result = connection.Execute($"UPDATE apiclaims(Type,'Role2') SET `Type` = 'role', `ApiResourceId` = 1 WHERE `Id` = 1;");
            var result = connection.Query ($@"SELECT
            *
FROM
	apiclaims FETCH NEXT 10 ROWS ONLY");

            return Ok (result);
        }
        return BadRequest ("");
    }
}