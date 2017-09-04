# Diamond Sweeper

## Problem Statement

The goal of this exercise is to build a game.

The rules of the game are as follows:

* The game board has 8x8 squares
* There are 8 diamonds hidden on the board, each diamond behind one of the square
* When the user clicks on a square
     * If the square was hiding a diamond, the diamond appears
     * If the square was not a diamond, then an arrow appears, pointing towards the nearest diamond
     * Any arrows that were previously show become hidden
* The game ends when all diamonds are found. The user's score is the number of squares still left unturned.

## Starter App

Provided is a simple application which can be used as a starter kit. It contains a simple UI for the above problem. Feel free to add any libraries or frameworks that you believe can help. We do expect unit tests for any logic that the application contains.

Requirements:

* node.js (the app was built against v8.1.4, but any node > 6 should work)
* npm

## Bonus Sections

You may also choose to try some of the bonus parts of this problem:

1. (UI) - Improve the board to semantic html. The default HTML provided uses tables.
2. (UI) - Make the UI responsive.
3. (Javascript) - Support the ability to save your progress, and load your last save.
