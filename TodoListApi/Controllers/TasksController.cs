using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoListApi.Models;
using TodoListApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace TodoListApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly TaskService _taskService;

        public TasksController(TaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        public async Task<List<TaskModel>> Get() => await _taskService.GetAllAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<TaskModel>> Get(string id)
        {
            var book = await _taskService.GetAsync(id);

            if (book is null)
            {
                return NotFound();
            }

            return book;
        }

        [HttpPost]
        public async Task<IActionResult> Post(TaskModel newTask)
        {
            await _taskService.CreateAsync(newTask);
            return CreatedAtAction(nameof(Get), new { id = newTask.Id }, newTask);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, TaskModel updatedTask)
        {
            var task = await _taskService.GetAsync(id);

            if (task is null)
            {
                return NotFound();
            }

            updatedTask.Id = task.Id;
            await _taskService.UpdateAsync(id, updatedTask);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var task = await _taskService.GetAsync(id);

            if (task is null)
            {
                return NotFound();
            }

            await _taskService.RemoveAsync(id);
            return NoContent();
        }
    }
}
