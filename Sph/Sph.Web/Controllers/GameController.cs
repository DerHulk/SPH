﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AttributeRouting.Web.Mvc;

namespace Sph.Web.Controllers
{
    public class GameController : Controller
    {
        //
        // GET: /Main/
        public ActionResult Index()
        {
            return View("Game");
        }

    }
}
