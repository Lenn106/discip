# Discip https://lenn106.github.io/Discip
Discip <img src="https://tinypic.host/images/2023/07/22/image484191321929ac64.png" alt="DiscIP Logo" width="50" height="50">

## Description
DiscIP is a Discord project that allows you to gather user information and perform IP-related tasks within a Discord server. It provides an easy-to-use interface for retrieving user agent, IP address, operating system, and website domain information. Additionally, it offers handy IP tools like IP resolver, IP lookup, and DDoS attack tools.

## Legality
DiscIP is not illegal, because it fetches a database of publicly known information. The legality of this depends on your actions with this information, which we aren't responsible for.

## How It Works
DiscIP works by integrating a website with a discord webhook server. The code collects user information using JavaScript and sends it to the discord server, which processes the information and triggers an embeded message in a designated Discord channel, displaying the user information and providing links to the IP tools.

## Usage
1. Update the `WEBHOOK_URL_PLACEHOLDER` in the `main-script.html` file with your Discord webhook URL.
2. You can make your own IP logging website with the code or use the bookmarklet version.
3. Deploy the website on GitHub pages or websutes hosting software in general, including the logging code.
4. Users can now access the website, and their information will be sent to the Discord channel specified in the webhook URL.

## Contributing
Contributions to DiscIP are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the [Unlicense](LICENSE).

