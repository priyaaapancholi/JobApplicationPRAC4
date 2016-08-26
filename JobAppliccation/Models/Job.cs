using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace JobAppliccation.Models
{
    public class Job
    {
        [Key]
        
        public int JobId { get; set; }

        [Required]
        public string JobName { get; set; }

        [Required]
        [MaxLength(100)]
        public string Description { get; set; }

        [Required]
        public int NoOfPosition { get; set; }

        
        public int NoOfPositionLeft { get; set; }
    }
}