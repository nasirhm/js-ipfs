'use strict'

const utils = require('../../utils')
const mh = require('multihashes')
const print = utils.print

module.exports = {
  command: 'rm <key>',

  describe: 'Remove a raw IPFS block',

  builder: {},

  handler (argv) {
    if (utils.isDaemonOn()) {
      // TODO implement this once `js-ipfs-http-client` supports it
      throw new Error('rm block with daemon running is not yet implemented')
    }

    argv.ipfs.block.rm(mh.fromB58String(argv.key), (err) => {
      if (err) {
        throw err
      }

      print('removed ' + argv.key)
    })
  }
}
