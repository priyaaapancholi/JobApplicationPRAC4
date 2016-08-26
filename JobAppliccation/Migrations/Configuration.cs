namespace JobAppliccation.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<JobAppliccation.Models.ApplicationDbContext>
    {

        public enum Roles { Admin, Applicant }
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(JobAppliccation.Models.ApplicationDbContext context)
        {
            var Roles = Enum.GetNames(typeof(Roles));
            foreach (var role in Roles)
            {
                if (!context.Roles.Any(r => r.Name == role))
                {
                    var store = new RoleStore<IdentityRole>(context);
                    var manager = new RoleManager<IdentityRole>(store);
                    var roles = new IdentityRole { Name = role };

                    manager.Create(roles);




                }
            }





            var user = new ApplicationUser
            {
                UserName = "Priya",
                Email = "priya.pancholi@promactinfo.com"

            };
            var userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            if (userManager.FindByName("Priya") == null)
            {
                var result = userManager.Create(user, "Pp@1234");

                if (result.Succeeded)
                {
                    userManager.AddToRole(user.Id, "Admin");
                }

            }



        }
    }
}
