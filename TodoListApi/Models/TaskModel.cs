using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TodoListApi.Models
{
    public class TaskModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("task")]
        public string Task { get; set; } = null!;
        
        [BsonElement("detail")]
                public string Detail { get; set; } = null!;

        [BsonElement("status")]
        public bool Status { get; set; }

        public string Category { get; set; } = null!;

        [BsonElement("sub task")]
        public List<SubTaskModel>? SubTasks { get; set; }
    }
}
