﻿using API.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.CommonServices
{
    [Table("Photos")]
    public class Photo
    {

        public int Id { get; set; }
        public string Url { get; set; }

        public bool IsMain { get; set; }

        public string PublicId { get; set; } = string.Empty;

        public AppUser AppUser { get; set; }

        public int AppUserId { get; set; }


    }
}
