using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TodoListApi.Models
{
    public class Task
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string Task { get; set; } = null!;
        
        public string Detail { get; set; } = null!;

        public bool Status { get; set; }

        public string Category { get; set; } = null!;

        [BsonElement("sub task")]
        public List<SubTask> SubTasks { get; set; }
    }
}
