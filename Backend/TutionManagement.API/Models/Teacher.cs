using System.ComponentModel.DataAnnotations;
namespace TutionManagement.API.Models
{
    public class Teacher
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public string Address { get; set; }
        public string Class { get; set; }
    }
}