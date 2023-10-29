using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TodoListApi.Controllers
{
    [ApiController]
    [Route("/")]
    public class Connect : ControllerBase
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok("Hello World 1");
        }
    }
}