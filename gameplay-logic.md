﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿# Game Play Logic Flow
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
---

## User stories in order of battle-round/phases
1.  **Movement Phase**
    * As a user I would like to be able to tell when I am in the **Movement Phase** so that I can perform the necessary actions for that phase.
    * As a user I want to be able to move my _models_ anywhere on the map so even if the rules would normally prevent an action, I can make adjustments whenever I see fit to better strategize.
    * As a user I would like to be able to have my devices screen scaled correctly to match the 4' x 6' game area so that I know my strategies are being planned on an accurate representation of the game.
    * As a user I want to clearly see where my _model_ was before I moved it so that I can consider the different possible strategies.
    * As a user if a _model_ has a **minimum move** I would like to be able to easily tell so that I can follow the requirements of that specific _model_.
    * As a user I want to know when a _model_ I'm placing has moved outside of it's movement range (**maximum speed**) so that I can practice a realistic strategy.
    * As a user if the *datasheet* for a _model_ says it can **fly** I would like to be able to easily tell so that I don't have to constantly check while I'm strategizing.
    * As a user I want to be able to easily tell when a _model_ I'm moving has moved within **1"** of any _enemy models_ so that I can insure that I am strategizing effectively.
    * As a user it would be useful to easily tell when one of my _units_ is within **1"** of an _enemy unit_ so that I can choose to **fall back** if I deem it necessary to do so.
    
2. **Psychic Phase**
    * As a user I would like to be able to tell when I am in the **Psychic Phase** so that I can perform the necessary actions for that phase.
    * As a user if I have a model whose datasheet says it's a **Psyker** I would like to be able to easily tell so that it is easier to remember while I am strategizing.
    * As a user I would like to be able to easily tell what **powers** a **psyker** knows, as well as the number of **powers** they can attempt to manifest or deny each **Psychic phase**.
    * As a user I would like to be able to remove any _model_ from the game board so that I can adequately deal with _models_ that have "died".

3. **Shooting Phase**
    * As a user I would like to be able to tell when I am in the **Shooting Phase** so that I can perform the necessary actions for that phase.
    * As a user I want to be able to tell which _models_ are armed with **ranged weapons** so that I can be informed of all my options when strategizing.
    * As a user I want to clearly indicate which _units_ I have shot with so that I can easily progress through the **shooting phase**.
    * As a user I want to be able to easily see the weapons a model has (**datasheet**)  so that I can determine the appropriate course of action.
    * As a user I want to be able to tell which _models_ are _characters_ so that I can position them strategically on the battlefield.
    * As a user I want to be able to quickly see what my _character's_ special abilities are from their **datasheet**.
    * As a user I want to be able to easily perform the necessary dice rolls between my units and the enemy units so that more focus can be made on more strategic elements such as **wound allocation**
    * As a user I would like to be able to view the **stats** and other necessary information for shooting so that I can make the best strategic decisions possible.
    * As a user I would like to be able to easily keep track of damage dealt to my **units** and the **enemy units** so that I can better focus on strategy.
    * As a user I would like to be able to remove any _model_ from the game board so that I can adequately deal with _models_ that have "died".

4. **Charge Phase**
    * As a user I would like to be able to tell when I am in the **Charge Phase** so that I can perform the necessary actions for that phase.
    * As a user I should be able to clearly see what _models_ can **charge** so that I can easily choose which _models_ to charge with.
    * As a user I when I select a _model_ to charge with, I should be able to see what **units** I can **charge** with that _model_.
    * As a user I should be free to **move** my **units** anywhere on the map so that I can easily move them to **charge** an **enemy unit**

5. **Fight Phase** 
    * As a user I would like to be able to tell when I am in the **Fight Phase** so that I can perform the necessary actions for that phase.
    * As a user I should be able to tell which _models_ (**if any**) had charged in the prior phase, so that I can make sure to fight with them first.
    * As a user I would like to be able to clearly see what _models_ are within **1"** of an **enemy unit** so I can determine which (**if any**) models can participate in the fight phase.
    * As a user I should be able to **pile in** each _model_ in the chosen **unit** up to **3"** closer to the nearest **enemy model**.
    * As a user I should be able to easily tell what **melee** weapons my model is equipped with so that I can easily choose what weapons they are attacking with.
    * As a user I should be able to easily see the **stats** of all models so that I can quickly resolve **close combat attacks**.
    * As a user I should be able to consolidate my **units** by moving each _model_ up to **3"** closer to the nearest **enemy model**.

6. **Morale Phase**
    * As a user I would like to be able to tell when I am in the **Morale Phase** so that I can perform the necessary actions for that phase.

---

### Global stories:
* A user should be able to __zoom in__ on the map.
    * When zoomed in:
        * A user should be able to __swipe__ in any direction to move around the map.
* A user should be able to __zoom out__ on the map.
* A user should be able to __tap__ any unit to see:
    * Special Abilities
    * Mortal Wounds (counter)
    * Other Stats _(pg.175 in 8th ed. rulebook)_
* A user should be able to use the __back__ and __next__ buttons to __undo/redo__ all user inputs during the game.
* A user should be able to access the dice manager at anytime (except when using the menu).
* _(settings)_ A user should be able to toggle __AOE__ _(Area of Effect)_ highlights.
