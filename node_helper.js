/* Magic Mirror
 * Node Helper: MMM-ModuleTemplate
 *
 * By Stefan Nachtrab
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	/* socketNotificationReceived(notification, payload)
	 * This method is called when a socket notification arrives.
	 *
	 * argument notification string - The identifier of the noitication.
	 * argument payload mixed - The payload of the notification.
	 */
	socketNotificationReceived: function (notification, payload) {
		var self = this;
		if (
			notification ===
			"MMM-ModuleTemplate-NOTIFICATION_whatever_DATA_REQUESTED"
		) {
			self.sendSocketNotification(
				"MMM-ModuleTemplate-NOTIFICATION_whatever_DATA_RECEIVED",
				{text: "Hello World!"}
			);
		}
	}
});
