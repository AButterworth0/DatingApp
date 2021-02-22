using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static void Main(string[] args) // this method is run when i type "dotnet run" in the CLI
        {
            CreateHostBuilder(args).Build().Run();  //calls the method below
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>  
            Host.CreateDefaultBuilder(args) //initialises the HostBuilder
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
