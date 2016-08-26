using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JobAppliccation.Startup))]
namespace JobAppliccation
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
