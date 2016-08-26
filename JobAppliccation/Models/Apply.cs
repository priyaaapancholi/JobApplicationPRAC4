using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace JobAppliccation.Models
{
    public class Apply
    {
        public string ApplyId { get; set; }


        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser Users { get; set; }


        public int JobId { get; set; }
        [ForeignKey("JobId")]
        public Job Jobs { get; set; }
    }
}