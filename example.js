const {wsend} = new (require('./index'));
const avatarURL = "https://cdn.discordapp.com/avatars/327183591752859658/cac43590267d084b850777105fd24e9e.webp?size=2048"

wsend("discordWebhookToken", "discordWebhookID", { content: "Webhook message content", username: "Username", avatar_url: avatarURL });
//with avatarURL and username.

wsend("discordWebhookToken", "discordWebhookID", { content: "Webhook message content", username: "Username" });
// without webhook avatar_url.

wsend("discordWebhookToken", "discordWebhookID", { content: "Webhook message content", avatar_url: avatarURL });
// without webhook username

wsend("discordWebhookToken", "discordWebhookID", {content: "Webhook message content"})
