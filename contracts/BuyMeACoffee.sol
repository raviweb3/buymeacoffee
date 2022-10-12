// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract BuyMeACoffee {
    // Memo to record
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }

    // Memos stored
    Memo[] private s_memos;

    // Event
    event NewMemo(address indexed from,
        uint256 timestamp,
        string name,
        string message
    );

    address payable private s_owner;

    constructor(){
        // Store the address of the deployer
        s_owner = payable(msg.sender);
    }

    function buyCoffee(string memory _name, string memory _message) public payable{
        require(msg.value > 0,"Cannot buy coffee with 0 Eth.");

        s_memos.push(Memo(
            msg.sender,
            block.timestamp,
            _name,
            _message
        ));

        emit NewMemo( msg.sender,
            block.timestamp,
            _name,
            _message);

    }

    function withdrawTips() public {
        require(msg.sender == s_owner, "Not authorized to withdraw funds");
        // withdraw funds
        require(s_owner.send(address(this).balance));
    }


    function getMemos() public view returns(Memo[] memory){
        return s_memos;
    }

    function getOwner() public view returns(address){
        return s_owner;
    }
}
