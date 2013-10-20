/**
 * New node file
 */
/**
 * Created by David on 10/20/13.
 */
"use strict";

function Character(xPos, yPos)
{
    // Public variables
    this.x;		// x-coordinate of Character's position
    this.y;		// y-coordinate of Character's position
    this.vX;    // x-velocity of the Character
    this.vY;    // y-velocity of the Character

    // Constructor
    var that = this; // Unused in Character for now.
    this.x = xPos;
    this.y = yPos;
    this.vX = 0; // scaling factor is 10
    this.vY = 0; // scaling factor is 3

    /*****************************   SET METHODS   *****************************/
    this.setX = function(newX)
    {
        this.x = newX;
    }
    this.setY = function(newY)
    {
        this.y = newY;
    }
    this.setVX = function(newVX)
    {
        this.vX = newVX;
    }
    this.setX = function(newVY)
    {
        this.vY = newVY;
    }

    /*****************************   GET METHODS   *****************************/
    this.getX = function()
    {
        return x;
    }

    this.getY = function()
    {
        return y;
    }
    this.getVX = function()
    {
        return vX;
    }
    this.getVY = function()
    {
        return vY;
    }


}
