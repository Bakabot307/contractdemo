const MyToken = artifacts.require("STA");

module.exports = function (deployer) {
  deployer.deploy(MyToken, 1000000);
};
