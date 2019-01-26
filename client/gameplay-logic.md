# Game Play Logic Flow
---
## *This Markdown file is for detailing all 'user stories' that relate to gameplay/gameplay-logic.*
>The information in this file will be combined with the research that is being done on the implementation of the gameplay-logic to create the issues that will need to be solved to get this portion of the project to the next phase.

Important Links | ...
----------------- | -----------------
Battle-Tactics (ZenHub Tab) | https://github.com/MrStevenNg/Battle-Tactics/wiki#zenhub
Battle-Tactics (Wiki Tab) | https://github.com/MrStevenNg/Battle-Tactics/wiki
Combat Phases Reference (PDF) | https://drive.google.com/file/d/17GSuJhBQ064sSG10Nwlo7RIWBcZkYY1I/view
---

## Reference:
>The Battle Round.

1. Movement Phase
    * _Move any units that are capable of doing so._
2. Psychic Phase
    * Psykers can use powerful mental abilities.
3. Shooting Phase
    * Your units may shoot enemy units.
4. Charge Phase
    * Your units may move into close combat against enemy units.
5. Fight Phase
    * Both players' units pile in and attack with melee weapons.
6. Morale Phase
    * Test the courage of depleted units.

>Once a player’s turn has ended, their opponent then starts their turn. Once both players have completed a turn, the **battle round** has been completed and the next one begins, and so on, until the battle is concluded.

> ######Additional Note:
> Not all phases are played each turn, it is dependent on several factors. (unit abilities, units killed, etc.)

---

## Unsorted 'user stories':
* A user should be able to __zoom in__ on the map.
    * When zoomed in:
        * A user should be able to __swipe__ in any direction to move around the map.
        * A user should _not_ be able to __swipe down__ to open the __dice manager__.
* A user should be able to __zoom out__ on the map.
    * When zoomed out:
        * A user should be able to __swipe down__ to access the __dice manager__.
* A user should be able to __tap__ any unit to see:
    * Special Abilities
    * Mortal Wounds (counter)
    * Other Stats _(pg.175 in 8th ed. rulebook)_
* A user should be able to hold/drag any unit to any location on the map.
    * A user should receive a clear indicator that a unit is being moved outside of it's movement range.
    * A user should be able to __double tap__ a moved unit to reset it to it's last position.
* A user should be able to easily compare stats between one of their __units__ and an __enemy unit__.
* A user should be able to use the __back__ and __next__ buttons to __undo/redo__ all user inputs during the game.







