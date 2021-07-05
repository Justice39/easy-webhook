const request = require('request');

class EasyWebhook {

    constructor() {

    }

    /**
     * Webhook send
     *
     * @example wsend("DiscordWebhookToken", "DiscordWebhookID", {content: "This message posted by webhook"});
     *
     * @param {String} wtoken Discord webhook token
     * @param {String} wid Discord webhook url
     * @param {Object} options  Webhook options
     * @param {Object} [options.content]  Message content
     * @param {Object} [options.avatar_url]  Webhook avatarURL
     * @param {Object} [options.username]Webhook username
     */

    wsend(wtoken, wid, options) {

        return new Promise((resolve, reject) => {
        if(typeof wtoken !== "string") throw new Error("Webhook token must be string!");
        if (typeof wid !== "string") throw new Error("Webhook ID must be string!");
        if (typeof options !== "object") throw new Error("Options must be object!");

        const obj = Object.assign({
            content: undefined,
            avatar_url: undefined,
            username: undefined
        }, options);
        const url = "https://discord.com/api/v8/webhooks/"+wid+"/"+wtoken;
        if(!obj.content) return Error("You must be enter content!");
        const body = {content: obj.content};
        if(obj.avatar_url) body["avatar_url"] = obj.avatar_url;
        if (obj.username) body["username"] = obj.username;
            request({
                url,
                method: "POST",
                json: true,
                body,
            }, (error, response, body) => {
                if (error) {
                    reject(error)
                    throw error
                }
                if(!body) return;
                resolve(body);
            });
        });
    };
    
};

module.exports = EasyWebhook;
