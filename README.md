# Battle Tactics

A mobile strategy application for the popular miniature wargame, 'Warhammer 40,000'.

# Motivation

To provide a platform for pro-wargamers to strategize in a method similar to how a football coach would use a playbook.

# Screenshots

![battletacticsgif.gif](https://images.zenhubusercontent.com/5bb4428d58d3b92dfedf3084/3c1fcd7e-cbfc-4124-81c7-492554701828)

# Installation

![bt-qr-code.png](https://images.zenhubusercontent.com/5bb4428d58d3b92dfedf3084/302b5433-9db9-4f6b-86fd-80fa889fe1d1)

1. Download [Expo from Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US). 
2. Open the Expo App and scan the above QR code.

# Tech/framework used

* React Native

# How to use?

1. Click on "Import Armies" button, this will take a few minutes. (you will only have to do this the first time you open the app)
2. "Create" button will appear on the screen, click on it to proceed.
3. Swipe through the different maps and click on the red grid icon to select the one you wish to use. 
4. Drag the terrain pieces in any configuration you like.
    * Press and hold each terrain component to lock into place.
5. Click on the faction you would like to use, the selected faction will be displayed at the bottom of the list.
6. Click on "Load Units" to load the models of your selected faction.
7. Click on the models to add them to your unit (you can click on multiple models).
8. Swipe through the different deployment schemes and click on the one you wish to use. 
9. Drag the models in any configuration you like.

# Additional features
* While moving a unit, press down a second finger to reset it's position.
* Each model has a maximum range of travel, if the unit moves beyond it's maximum range of travel, the movement marker will display a RED border.
    * The user is not limited to only moving models within their max movement range to allow them to have the freedom to adjust the current play area to simulate different battle conditions.
* Press and hold for 3 seconds to turn on range detector, if the unit has ranged weapons then all enemy units within range will change to indicate they can be targeted.
* Tap on an individual model to open it's information modal:
    * Look at basic stats.
    * Adjust wound counter.
    * Delete model (If model has been killed etc.)



