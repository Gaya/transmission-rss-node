#Transmission RSS feed for Node

Enables automatic RSS feed torrents to be added to Transmission.

##Installation

1. Make sure you have node.js installed.

2. Put the source of somewhere on your system (or server running transmission).

3. Create a `.config.json` file in the root of the project.

4. Add the following:

```
{
	"feeds": ["<URL to your feed>"],
	"host": "0.0.0.0",
	"port": 9091,
	"username": "<Transmission Username>",
	"password": "<Transmission Password>"
}
```

5. Run once by entering the following command:

```
npm start
```

##Configuration

`feeds`: An array of feeds you wish to read.
`host`: Host IP of Transmission. `0.0.0.0` for localhost or enter your remote machine's ip.
`port`: The Transmission port.
`username`: Transmission's username.
`password`: Transmission's password.

##Running automatically

Use crontab to run this script automatically.

Enter crontab: `crontab -e`.

Run the script every hour by adding the following:

```
0 * * * * node /home/transmission-rss-node
```

Where `/home/transmission-rss-node` is the path to where you put `transmission-rss-node`.