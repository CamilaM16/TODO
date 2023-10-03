using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoListApi.Models
{
    public class SubTask
    {
        
        [BsonElement("title")]
        public string SubTaskTitle { get; set; } = null!;

        [BsonElement("status")]
        public bool Status { get; set; }
    }
}