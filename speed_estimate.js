var etm = eth.getBlock("latest").difficulty/miner.hashrate; // estimated time in seconds
console.log(Math.floor(etm / 3600.) + "h " + Math.floor((etm % 3600)/60) + "m " +  Math.floor(etm % 60) + "s");
// 1h 3m 30s
