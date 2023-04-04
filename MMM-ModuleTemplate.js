/* global Module */

/* Magic Mirror
 * Module: MMM-ModuleTemplate
 *
 * By Stefan Nachtrab
 * MIT Licensed.
 */

Module.register("MMM-ModuleTemplate", {
	defaults: {
		updateInterval: 5000
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function () {
		var self = this;

		console.log("Starting module MMM-ModuleTemplate");

		//Flag for check if module is loaded
		this.loaded = false;

		self.getData();
		setInterval(function () {
			self.getData();
			self.updateDom();
		}, this.config.updateInterval);

		this.loaded = true;
	},

	getData: function () {
		this.sendSocketNotification(
			"MMM-ModuleTemplate-NOTIFICATION_whatever_DATA_REQUESTED",
			{
				config: this.config
			}
		);
	},

	getHeader: function () {
		return this.translate("TITLE");
	},

	getTemplate: function () {
		if (
			!this.loaded
		) {
			return "templates/error.njk";
		}
		return "templates/default.njk";
	},

	getTemplateData: function () {
		if (!this.loaded) {
			return {
				status: "Loading MMM-ModuleTemplate...",
				config: this.config
			};
		}

		if (this.dataBackend !== undefined) {
			return {
				config: this.config,
				translations: {
					title: this.translate("TITLE")
				},
				data: this.dataBackend
			};
		}

		return {
			status: "Loading MMM-ModuleTemplate...",
			config: this.config
		};
	},

	getScripts: function () {
		return [];
	},

	getStyles: function () {
		return ["MMM-ModuleTemplate.css"];
	},

	// Load translations files
	getTranslations: function () {
		return {
			en: "translations/en.json",
			de: "translations/de.json"
		};
	},

	// socketNotificationReceived from helper
	socketNotificationReceived: function (notification, payload) {
		if (
			notification ===
			"MMM-ModuleTemplate-NOTIFICATION_whatever_DATA_RECEIVED"
		) {
			// set dataNotification
			this.dataBackend = payload;
			this.updateDom();
		}
	}
});
