'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {

    const list = document.createElement('ul');

    list.innerHTML = friends.map((item) => {
        return `<li>${item.firstName} ${item.lastName}</li>`;
    }).join('');

    return list;

}
