﻿using JobAppliccation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JobAppliccation.Controllers
{
    public class LoginController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();
        // GET: Login
        public ActionResult Applicant()
        {
            return View();
        }


        public ActionResult Admin()
        {
            return View();
        }

    }
}