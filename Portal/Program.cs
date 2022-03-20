using System;
using System.Collections.Generic;
using System.Text;
using Flow.Lab;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

var serverVersion = new MySqlServerVersion (new Version (8, 0, 22));
var builder = WebApplication.CreateBuilder (args);
string connectionString = builder.Configuration["ConnectionStrings:DefaultConnection"];
string migrationsAssembly = "IDS4.Dotnet6"; //QuickApp

// builder.Services.AddDbContext<ApplicationDbContext> (options =>
//     // options.UseSqlServer (connectionString, b => b.MigrationsAssembly (migrationsAssembly)));
//     options.UseMySql (connectionString, serverVersion, b => b.MigrationsAssembly (migrationsAssembly)));

builder.Services.AddCors (options => {
    // CorsPolicy 是自訂的 Policy 名稱
    options.AddPolicy ("CorsPolicy", policy => {
        policy.AllowAnyOrigin ()
            .AllowAnyMethod ()
            .AllowAnyHeader ();
    });
});

builder.Services.AddControllersWithViews ();

// In production, the Angular files will be served from this directory
builder.Services.AddSpaStaticFiles (configuration => {
    configuration.RootPath = "ClientApp/dist";
});
builder.Services.AddEndpointsApiExplorer ();
builder.Services.AddSwaggerGen ();

var app = builder.Build ();

if (builder.Environment.IsDevelopment ()) {
    app.UseDeveloperExceptionPage ();
} else {
    app.UseExceptionHandler ("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts ();
}

app.UseHttpsRedirection ();
app.UseStaticFiles ();

if (!builder.Environment.IsDevelopment ()) {
    app.UseSpaStaticFiles ();
}

app.UseCors ("CorsPolicy");

app.UseSwagger ();
app.UseSwaggerUI ();

app.UseAuthentication ();
app.UseRouting ();
app.UseAuthorization ();

app.UseEndpoints (endpoints => {
    endpoints.MapControllerRoute (
        name: "default",
        pattern: "{controller}/{action=Index}/{id?}"
    );
});
app.UseSpa (spa => {
    // To learn more about options for serving an Angular SPA from ASP.NET Core,
    // see https://go.microsoft.com/fwlink/?linkid=864501

    spa.Options.SourcePath = "ClientApp";

    if (builder.Environment.IsDevelopment ()) {
        // spa.UseAngularCliServer (npmScript: "start");
        // spa.Options.StartupTimeout = TimeSpan.FromSeconds(120); // Increase the timeout if angular app is taking longer to startup
        spa.UseProxyToSpaDevelopmentServer ("http://localhost:4200"); // Use this instead to use the angular cli server
    }
});
app.Run ();