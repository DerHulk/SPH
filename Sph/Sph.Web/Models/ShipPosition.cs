using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace Sph.Web.Models
{
    /// <summary>
    /// Position of a Ship in Space.
    /// </summary>
    [DebuggerDisplay("ShipPosition X:{X} Y:{Y} Player:{Player}")]
    public class ShipPosition
    {
        /// <summary>
        /// Player how flys the Ship.
        /// </summary>
        public string Player { get; set; }

        /// <summary>
        /// X-Position.
        /// </summary>
        [JsonProperty("x")]
        public double X { get; set; }

        /// <summary>
        /// Y-Position.
        /// </summary>
        [JsonProperty("y")]
        public double Y { get; set; }
    }
}