using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Sph.Web.Models;

namespace Sph.Web.Controllers
{
    public static class UserHandler
    {
        public static HashSet<string> ConnectedIds = new HashSet<string>();
    }

    public class SpaceHub : Hub
    {
        public override System.Threading.Tasks.Task OnConnected()
        {
            UserHandler.ConnectedIds.Add(Context.ConnectionId);
            return base.OnConnected();
        }

        public override System.Threading.Tasks.Task OnDisconnected(bool stopCalled)
        {
            UserHandler.ConnectedIds.Remove(Context.ConnectionId);
            return base.OnDisconnected(stopCalled);
        }

        public void UpdatePosition(ShipPosition ship)
        {
            ship.Player = Context.ConnectionId;

            Clients.AllExcept(ship.Player).updateShape(ship);

            var other = UserHandler.ConnectedIds.Where(x=> !x.Equals(ship.Player)).FirstOrDefault();
            if(other == null)
                return;

            Clients.Client(other).updatePosition(ship);
        }

    }
}