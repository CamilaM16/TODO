using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoListApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace TodoListApi.Services
{
    public class TaskService
    {
        private readonly IMongoCollection<TaskModel> _taskCollection;

        public TaskService(IOptions<TodoListDataBaseSettings> todoSettings)
        {
            var settings = todoSettings.Value;
            var mongoClient = new MongoClient(settings.ConnectionString);
            var mongoDataBase = mongoClient.GetDatabase(settings.DatabaseName);
            _taskCollection = mongoDataBase.GetCollection<TaskModel>(settings.TaskCollectionName);
        }

        public async Task<List<TaskModel>> GetAllAsync() =>
            await _taskCollection.Find(_ => true).ToListAsync();

        public async Task<TaskModel?> GetAsync(string id) =>
            await _taskCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(TaskModel newTask) =>
            await _taskCollection.InsertOneAsync(newTask);

        public async Task UpdateAsync(string id, TaskModel updatedTask) =>
            await _taskCollection.ReplaceOneAsync(x => x.Id == id, updatedTask);

        public async Task RemoveAsync(string id) =>
            await _taskCollection.DeleteOneAsync(x => x.Id == id);
    }
}
