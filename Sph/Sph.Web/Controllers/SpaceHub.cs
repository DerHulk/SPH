using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Sph.Web.Models;

namespace Sph.Web.Controllers
{
    public class SpaceHub : Hub
    {
        public void UpdatePosition(ShipPosition ship)
        {
            ship.Player = Context.ConnectionId;
            Clients.AllExcept(ship.Player).updateShape(ship);
        }

    }
}