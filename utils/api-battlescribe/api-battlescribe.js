var express = require('express');
var router = express.Router();
var request = require('request');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var catalogue, codexName, categories;
var categoryArr = [];

router.get('/searchCodex/:codex', function (req, res) {
	request(`https://raw.githubusercontent.com/BSData/wh40k/master/${req.params.codex}.cat`, function (error, response, body) {
		parser.parseString(body, function (err, result) {
			codexObj = result.catalogue;
			catalogue = codexObj[Object.keys(codexObj)[0]];
			categories = codexObj.categoryEntries[0].categoryEntry;
			for (var i = 0; i < categories.length; i++) {
				var categoryName = categories[i][Object.keys(categories[i])[0]].name;
				categoryArr.push(categoryName);
			}

			// res.json(codexObj.sharedSelectionEntries[0].selectionEntry);


			let array = []

			let fullList = codexObj.sharedSelectionEntries[0].selectionEntry;

			for (var i = 0; i < fullList.length; i++) {

				if (fullList[i].$.type != 'upgrade') {




					if (fullList[i].categoryLinks[0].categoryLink) {
						for (var j = 0; j < fullList[i].categoryLinks[0].categoryLink.length; j++) {

							var value = fullList[i].categoryLinks[0].categoryLink

							if (value[j].$.primary === "true") {
								var unitRole = value[j].$.targetId

								break

							} else {
								var unitRole = null
							}

						}

					}

					// Logic to derive profile
					if (!fullList[i].profiles[0].profile) {
						var profile = null
					} else {
						var profile = fullList[i].profiles[0].profile[0].characteristics[0].characteristic

						for (var j = 0; j < profile.length; j++) {

							if (profile[j].$.name === "M") {
								var profileM = profile[j].$.value
							}
							if (profile[j].$.name === "WS") {
								var profileWS = profile[j].$.value
							}
							if (profile[j].$.name === "BS") {
								var profileBS = profile[j].$.value
							}
							if (profile[j].$.name === "S") {
								var profileS = profile[j].$.value
							}
							if (profile[j].$.name === "T") {
								var profileT = profile[j].$.value
							}
							if (profile[j].$.name === "W") {
								var profileW = profile[j].$.value
							}
							if (profile[j].$.name === "A") {
								var profileA = profile[j].$.value
							}
							if (profile[j].$.name === "Ld") {
								var profileLd = profile[j].$.value
							}
							if (profile[j].$.name === "Save") {
								var profileSave = profile[j].$.value
							}



						}


					}
					

					//logic to derive profileTypeId:  Weapon, Abilities, Transport, Psyker, Psychic Power, Wound Track, Unit, Stat Damage - BS, S & A, Keywords, Landing Pad Configuration
					if (!fullList[i].profiles[0].profile) {
						var profile = null
					} else {
						var profileType = fullList[i].profiles[0].profile;
						//fullList[i].profiles[0].profile[0].$.profileTypeName
						for (var j = 0; j < profileType.length; j++) {

							if (profileType[j].$.profileTypeName === "Weapon") {
								var weapon = profileType[j].$.name
							}
							if (profileType[j].$.profileTypeName === "Abilities") {
								var abilities = profileType[j].$.name
							}
							if (profileType[j].$.profileTypeName === "Transport") {
								var transport = profileType[j].$.name
							}
							if (profileType[j].$.profileTypeName === "Psyker") {
								var psyker = profileType[j].$.name
							}
							if (profileType[j].$.profileTypeName === "Psychic Power") {
								var pyschic = profileType[j].$.name
							}
							if (profileType[j].$.profileTypeName === "Wound Track") {
								var wound = profileType[j].$.name
							}
							if (profileType[j].$.profileTypeName === "Unit") {
								var unit = profileType[j].$.name
							}
							if (profileType[j].$.profileTypeName === "Stat Damage - BS, S & A") {
								var statDamage = profileType[j].$.name
							}
							if (profileType[j].$.profileTypeName === "Keywords") {
								var keywords = profileType[j].$.name
							}
							if (profileType[j].$.profileTypeName === "Landing Pad Configuration") {
								var landingPad = profileType[j].$.name
							}
						}


					}

					// logic to derive additional profile
					if (!fullList[i].profiles[0].profile) {
						var profile = null
					} else {

						var profileAdditional = fullList[i].profiles[0].profile
						var additionalArray = []

						for (var j = 0; j < profileAdditional.length; j++) {
							if (profileAdditional[j].$.profileTypeName.match(/^Stat Damage.*$/)) {
								var profileAdditionalObj = {
									"name": profileAdditional[j].$.name,
									"profiletype": profileAdditional[j].$.name.substr(-3),
									"characteristic": profileAdditional[j].characteristics[0].characteristic
								}

								additionalArray.push(profileAdditionalObj)



							}

						}



					}

					// define cost 
					//use name matching on PTS etc
					if (fullList[i].costs[0]) {
						var pts = fullList[i].costs[0].cost[0].$.value
						var PL = fullList[i].costs[0].cost[1].$.value
						var CP = fullList[i].costs[0].cost[2].$.value
					}


					var bf_role = returnUnit(unitRole)




					var characterList = {
						"id": fullList[i].$.id,
						"name": fullList[i].$.name,
						"type": fullList[i].$.type,
						"bf_role": bf_role,
						"pts" : pts,
						"PL" : PL,
						"CP" : CP,
						"profile": {
							"M": profileM,
							"WS": profileWS,
							"BS": profileBS,
							"S": profileS,
							"T": profileT,
							"W": profileW,
							"A": profileA,
							"Ld": profileLd,
							"Sv": profileSave
						},
						"profileType":{
							"abilities": abilities,
							"transport": transport,
							"psyker": psyker,
							"psychic power": pyschic,
							"wound track": wound,
							"unit": unit,
							"Stat Damage - BS, S & A": statDamage,
							"keywords" : keywords,
							"landing pad configuration": landingPad,
							"weapon" : weapon,
						},
						"profile_additional": parseAdditionalArray(additionalArray)
						// "test" : fullList[i]
					}

					array.push(characterList)

				}
			}



			// console.log(array)

			res.json(array)





		});
	});
});

module.exports = router;



function returnUnit(unitRole) {
	if (unitRole === "ff36a6f3-19bf-4f48-8956-adacfd28fe74") {
		return "No Force Org Slot"
	}
	else if (unitRole === "848a6ff2-0def-4c72-8433-ff7da70e6bc7") {
		return "HQ"
	}
	else if (unitRole === "5d76b6f5-20ae-4d70-8f59-ade72a2add3a") {
		return "Troops"
	}
	else if (unitRole === "638d74c6-bd97-4de5-b65a-6aaa24e9f4b2") {
		return "Elites"
	}
	else if (unitRole === "c274d0b0-5866-44bc-9810-91c136ae7438") {
		return "Fast Attack"
	}
	else if (unitRole === "abf5fd55-9ac7-4263-8bc1-a9fb0a8fa6a6") {
		return "Heavy Support"
	}
	else if (unitRole === "e888-1504-aa61-95ff") {
		return "Flyer"
	}
	else if (unitRole === "1b66-3f5f-6705-079a") {
		return "Dedicated Transport"
	}
	else if (unitRole === "c888f08a-6cea-4a01-8126-d374a9231554") {
		return "Lord of War"
	}
	else if (unitRole === "d713cda3-5d0f-40d8-b621-69233263ec2a") {
		return "Fortification"
	} else {
		return null
	}
}

function parseAdditionalArray(additionalArray) {

	var profileOne = {
		"W": null,
		"Movement": null,
		"WS": null,
		"Strength": null,
		"BS": null,
		"Attacks": null,
		"PsychicOverLoad": null,
		"S": null
	}

	var profileTwo = {
		"W": null,
		"Movement": null,
		"WS": null,
		"Strength": null,
		"BS": null,
		"Attacks": null,
		"PsychicOverLoad": null,
		"S": null
	}

	var profileThree = {
		"W": null,
		"Movement": null,
		"WS": null,
		"Strength": null,
		"BS": null,
		"Attacks": null,
		"PsychicOverLoad": null,
		"S": null
	}

	var profileFour = {
		"W": null,
		"Movement": null,
		"WS": null,
		"Strength": null,
		"BS": null,
		"Attacks": null,
		"PsychicOverLoad": null,
		"S": null
	}

	if (!additionalArray) {
		return null
	} else
		for (var i = 0; i < additionalArray.length; i++) {


			if (additionalArray[i].profiletype == "(1)") {


				for (j = 0; j < additionalArray[i].characteristic.length; j++) {
					if (additionalArray[i].characteristic[j].$.name == "Remaining W") {
						profileOne.W = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Movement") {
						profileOne.Movement = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "WS") {
						profileOne.WS = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Strength") {
						profileOne.Strength = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "BS") {
						profileOne.BS = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Attacks") {
						profileOne.Attacks = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Psychic Overload") {
						profileOne.PsychicOverLoad = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "S") {
						profileOne.S = additionalArray[i].characteristic[j].$.value
					}

				}

			}

			if (additionalArray[i].profiletype == "(2)") {


				for (j = 0; j < additionalArray[i].characteristic.length; j++) {
					if (additionalArray[i].characteristic[j].$.name == "Remaining W") {
						profileTwo.W = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Movement") {
						profileTwo.Movement = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "WS") {
						profileTwo.WS = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Strength") {
						profileTwo.Strength = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "BS") {
						profileTwo.BS = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Attacks") {
						profileTwo.Attacks = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Psychic Overload") {
						profileTwo.PsychicOverLoad = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "S") {
						profileTwo.S = additionalArray[i].characteristic[j].$.value
					}

				}

			}

			if (additionalArray[i].profiletype == "(3)") {


				for (j = 0; j < additionalArray[i].characteristic.length; j++) {
					if (additionalArray[i].characteristic[j].$.name == "Remaining W") {
						profileThree.W = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Movement") {
						profileThree.Movement = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "WS") {
						profileThree.WS = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Strength") {
						profileThree.Strength = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "BS") {
						profileThree.BS = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Attacks") {
						profileThree.Attacks = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Psychic Overload") {
						profileThree.PsychicOverLoad = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "S") {
						profileThree.S = additionalArray[i].characteristic[j].$.value
					}

				}

			}

			if (additionalArray[i].profiletype == "(3)") {


				for (j = 0; j < additionalArray[i].characteristic.length; j++) {
					if (additionalArray[i].characteristic[j].$.name == "Remaining W") {
						profileFour.W = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Movement") {
						profileFour.Movement = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "WS") {
						profileFour.WS = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Strength") {
						profileFour.Strength = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "BS") {
						profileFour.BS = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Attacks") {
						profileFour.Attacks = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "Psychic Overload") {
						profileFour.PsychicOverLoad = additionalArray[i].characteristic[j].$.value
					}
					if (additionalArray[i].characteristic[j].$.name == "S") {
						profileFour.S = additionalArray[i].characteristic[j].$.value
					}

				}

			}

		}

	return [{ "profileOne": profileOne },
	{ "profileTwo": profileTwo },
	{ "profileThree": profileThree },
	{ "profileFour": profileFour }
	]

}




