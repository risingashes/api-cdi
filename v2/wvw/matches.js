// Bulk-expanded endpoint that provides data for the
// current WvW state.

// GET /v2/wvw/matches
[ "1-1", "1-2", "1-3" ]

// GET /v2/wvw/matches/1-1
// GET /v2/wvw/matches?id=1-1
// GET /v2/wvw/matches?page=0&page_size=1
// GET /v2/wvw/matches?world=1001

{
	"id"                : "1-1",
	"start_time"        : "2015-09-16T21:00:00Z",
	"end_time"          : "2015-09-17T21:00:00Z",
	"skirmish_end_time" : "2015-09-17T03:00:00Z",
	"scores"            : {
		"red"   : 44820,
		"blue"  : 44820,
		"green" : 44820
	},
	"victory_points" : {
		"red"   : 4,
		"blue"  : 6,
		"green" : 6
	},
	"skirmishes" : [
		{
			// NOTE: These are 1-indexed.
			"id" : 1,
			"scores" : {
				"red"   : 1536,
				"blue"  : 1536,
				"green" : 1536
			},
			"map_scores" : [
				{
					"type" : "RedHome",
					"scores" : {
						"red"   : 576,
						"blue"  : 576,
						"green" : 576
					}
				},
				// type=BlueHome
				// type=GreenHome
				// type=Center
			]
		},
		// Rest of skirmishes in this matchup.
	],
	"ratings"    : {
		"red"   : 1497.154175,
		"blue"  : 1502.117432,
		"green" : 1498.113525
	},
	"worlds"     : {
		"red"   : 1001,
		"blue"  : 1002,
		"green" : 1003
	},
	"all_worlds"  : {
		"red"   : [ 1001, 1004 ],
		"blue"  : [ 1002 ],
		"green" : [ 1003 ]
	},
	"victory_points" : {
		"red"   : 12,
		"blue"  : 14,
		"green" : 16
	},
	"maps" : [
		{
			"id"         : 98,
			"type"       : "RedHome",
			"scores"     : {
				"red"   : 11205,
				"blue"  : 8715,
				"green" : 8715
			},
			"bonuses" : [
				{
					"type"  : "Bloodlust",
					"owner" : "Red"
				}
			],
			"kills"  : {
				"red"   : 0,
				"blue"  : 1,
				"green" : 0
			},
			"deaths" : {
				"red"   : 0,
				"blue"  : 0,
				"green" : 50
			},
			"objectives" : [
				{
					"id"             : "98-102",
					"owner"          : "Red",
					"last_flipped"   : "2015-09-18T18:12:29Z",
					"claimed_by"     : "5AE7196D-F62F-E511-B0A0-0862664D7672",
					"claimed_at"     : "2015-09-18T18:12:44Z",
					"points_tick"    : 2,
					"points_capture" : 2,
					"guild_upgrades" : [123, 134],
					"yaks_delivered" : 24
				},
				{
					"id"           : "98-103",
					"owner"        : "Red",
					"last_flipped" : "2015-09-18T18:12:29Z",
					"claimed_by"   : null,
					"claimed_at"   : null,
					"points_tick"    : 2,
					"points_capture" : 2
				},
				...
			]
		},
		...
	]
}

// NOTES:
//  * maps.N.id is a map_id that can be resolved against /v2/maps. This is 
//    useful for determining which borderland is active.
//  * maps.N.objectives.M.id references /v2/wvw/objectives.
//  * maps.N.objectives.M.claimed_by is a guild GUID that can be resolved
//    with /v1/guild_details.json.
//  * ?world=X will always return the correct match, but the requested
//    world may not be in match.worlds due to merges.
//  * maps.N.objectives.M.guild_upgrades refers to /v2/guild/upgrades.
//  * maps.N.objectives.M.yaks_delivered is the total number of supply
//    shipments (not just within the current upgrade tier).
