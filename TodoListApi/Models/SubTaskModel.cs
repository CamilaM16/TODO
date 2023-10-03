using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TodoListApi.Models
{
    public class SubTaskModel
    {
        [BsonElement("title")]
        public string SubTaskTitle { get; set; } = null!;

        [BsonElement("status")]
        public bool Status { get; set; }
    }
}
