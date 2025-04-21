// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string public message = "Hello, GeneChain!";

    function setMessage(string memory _msg) public {
        message = _msg;
    }
}