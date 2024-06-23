using System.ComponentModel.DataAnnotations;
namespace TutionManagement.API.Models
{

    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Class { get; set; }
        public enum EducationalStatus
        {
            Excellent,
            Good,
            Average,
            Poor
        }

        public EducationalStatus Status { get; set; }
    }
}