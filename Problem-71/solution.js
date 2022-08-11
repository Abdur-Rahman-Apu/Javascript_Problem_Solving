const friends = ['kalam', 'Jashim', 'Abu bakkar', 'kasem'];

function bestFriend(friends) {
    let index = -1;
    let len = -9999;

    for (const friend of friends) {
        if (friend.length > len) {
            len = friend.length;
            index = friends.indexOf(friend);
        }
    }

    return friends[index];
}

console.log("Largest name of my friend is ", bestFriend(friends));