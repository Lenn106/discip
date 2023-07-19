# DiscIP

![DiscIP Logo](https://tinypic.host/images/2023/07/18/imagebe53bf784cc7a1a7.png)

## Description
DiscIP is a Discord project that allows you to gather user information and perform IP-related tasks within a Discord server. It provides an easy-to-use interface for retrieving user agent, IP address, operating system, and website domain information. Additionally, it offers handy IP tools like IP resolver, IP lookup, and DDoS attack tools.

## How It Works
DiscIP works by integrating a frontend website with a backend server. The frontend collects user information using JavaScript and sends it to the backend server, which then processes the information and triggers a Discord webhook. The webhook posts an embed message in a designated Discord channel, displaying the user information and providing links to the IP tools.

## Installation
1. Clone this repository to your local machine.
2. Set up a web server or backend environment that can handle the webhook request to Discord.
3. Update the `WEBHOOK_URL_PLACEHOLDER` in the `index.html` file with your Discord webhook URL.
4. Deploy the frontend website and ensure it is accessible by the users.
5. Start the backend server and make sure it is running properly.
6. Users can now access the website, and their information will be sent to the Discord channel specified in the webhook URL.

## Usage
1. Access the frontend website and fill in the necessary information.
2. Click the "Submit" button to send the user information to the Discord channel.
3. Check the specified Discord channel for the embed message containing the user information and IP tools links.

## Contributing
Contributions to DiscIP are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
