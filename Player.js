/**
 * New node file
 */
/**
 * Created by David on 10/20/13.
 */
"use strict";

function Player(sid, pid, xPos, yPos)
{
    // Public variables
    this.sid;   // Socket id. Used to uniquely identify players via
                // the socket they are connected from
    this.pid;   // Player id. In this case, 1,2,3 or 4
    this.character = new Character (xPos,yPos);// player's paddle object
    this.delay; // player's delay

    // This is Player Constructors
    this.sid = sid;
    this.pid = pid;

    this.delay = 0;



}
