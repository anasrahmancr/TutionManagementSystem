using Microsoft.EntityFrameworkCore;
using TutionManagement.API.Models;

namespace TutionManagement.API.Data
{

    public class ApplicationDbContext : DbContext
    {
        private readonly ILogger<ApplicationDbContext> _logger;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, ILogger<ApplicationDbContext> logger)
            : base(options)
        {
            _logger = logger;
            _logger.LogInformation("ApplicationDbContext created");
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            _logger.LogInformation("Connecting to database...");
            base.OnConfiguring(optionsBuilder);
        }
    }

}
