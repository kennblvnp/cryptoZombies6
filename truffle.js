module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    home: {
      host: "192.168.1.16",
      port: 1201,
      gas: 7984452,
      gasLimit: 7984452,
      gasPrice: 2000000000,
      network_id: "*"
    }
  },
  compiler: {
    version: "0.4.2",
    optimization: false
  }
};
