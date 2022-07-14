Easy Webhook 

# How to use ?

const {wsend} = new (require('easy-webhook')); 

wsend("discordWebhookToken", "discordWebhookID", {content: "Webhook message content"});


---

## Documentation
Parameter | Type | Optional | Description | 
--- | --- | --- | --- 
webhooktoken | `string` | false | The webhook token
webhookID | `string` | false | The webhookID
options | `object` | false | The webhook options
options.content | `string` | false | The webhook content
options.name | `string` | true | The webhook name
options.avatar_url | `string` | true | The avatarURL of the webhook

---



# You need help ?

[Click Here!](https://discord.com/users/865648010390405146)
